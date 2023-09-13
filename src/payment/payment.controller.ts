import {
  Controller,
  Post,
  Body,
  Param,
  InternalServerErrorException,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { InitiatePaymentDto } from './dto/initiate-payment.dto';
import { Payment, RequestedBySources } from './entities/payment.entity';
import { PubSubService } from 'src/core/providers/pub-sub/pub-sub.service';
import { PaymentCompletedEventDto } from 'src/payment/dto/payment-completed-event.dto';

@Controller('payment')
export class PaymentController {
  readonly CASHLESS_CLAIM_PAYMENT_COMPLETED =
    'cashless-claim-payment-completed';

  constructor(
    private readonly paymentService: PaymentService,
    private pubSubService: PubSubService,
  ) {}

  @Post('initiate')
  async initiatePayment(@Body() initiatePayemntDto: InitiatePaymentDto) {
    console.log('-------------------  -------------------');
    console.log(`Initiate payment API invoked.`);
    try {
      const payment = new Payment({
        ...initiatePayemntDto,
      });

      const savedPayment = await this.paymentService.createPaymentRecord(
        payment,
      );

      return savedPayment.id;
    } catch (error) {
      console.log(`Error occured during payment initiation ! ${error.message}`);
      throw new InternalServerErrorException(
        'Error occured during payment initiation !',
        {
          cause: error,
          description: error.message,
        },
      );
    }
  }

  @Post('webhook/:paymentId')
  async updatePayment(@Param('paymentId') paymentId: number) {
    console.log('-------------------  -------------------');
    console.log(`Payment webhook API invoked.`);
    try {
      const payment = await this.paymentService.findOne(paymentId);

      if (!payment) {
        throw new Error(`Payment with id: ${paymentId} not found !`);
      }

      const savedPayment = await this.paymentService.updatePaymentRecord(
        payment,
      );

      await this.publishMessage(savedPayment);
    } catch (error) {
      console.log(
        `Error occured while processing payment webhook ! ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Error occured while processing payment webhook !',
        {
          cause: error,
          description: error.message,
        },
      );
    }
  }

  async publishMessage(savedPayment: Payment) {
    const { requestedBy, uniqueTransactionId, id: paymentId } = savedPayment;

    switch (requestedBy) {
      case RequestedBySources.CASHLESS_CLAIM:
        const paymentCompletedEventDto: PaymentCompletedEventDto = {
          paymentId,
          uniqueTransactionId,
        };

        console.log('Publishing to cashless-claim-payment-completed topic.');
        await this.pubSubService.publishMessage(
          this.CASHLESS_CLAIM_PAYMENT_COMPLETED,
          paymentCompletedEventDto,
        );
        break;

      default:
        break;
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment, PaymentStatus } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async createPaymentRecord(payment: Payment) {
    const { uniqueTransactionId } = payment;
    const existingPayment = await this.paymentRepository.findOne({
      where: {
        uniqueTransactionId,
      },
    });

    if (!existingPayment) {
      return await this.save(payment);
    }
  }

  async updatePaymentRecord(payment: Payment) {
    payment.status = PaymentStatus.COMPLETED;

    await this.save(payment);

    return payment;
  }

  save(payment: Payment) {
    return this.paymentRepository.save(payment);
  }

  findOne(id: number) {
    return this.paymentRepository.findOneBy({ id });
  }
}

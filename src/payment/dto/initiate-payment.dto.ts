import { IsEnum, IsInt, IsNumber, IsString } from 'class-validator';
import { RequestedBySources } from '../entities/payment.entity';

export class InitiatePaymentDto {
  @IsInt()
  uniqueTransactionId: number;
  @IsEnum(RequestedBySources)
  requestedBy: RequestedBySources;
  @IsNumber()
  amount: number;
  @IsString()
  accountNumber: string;
  @IsString()
  ifscCode: string;
  @IsString()
  accountName: string;
}

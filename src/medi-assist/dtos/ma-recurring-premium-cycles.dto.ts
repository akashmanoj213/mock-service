import { IsNumber, IsDateString, IsOptional, IsEnum } from 'class-validator';

export enum PaymentFrequency {
  Single = 'SINGLE',
  Yearly = 'YEARLY',
  Monthly = 'MONTHLY',
  HalfYearly = 'HALFYEARLY',
  Quarterly = 'QUARTERLY',
}

export class MaRecurringPremiumCyclesDto {
  @IsEnum(PaymentFrequency)
  PAYMENTFREQUENCY: PaymentFrequency;

  @IsNumber()
  NETPREMIUM: number;

  @IsOptional()
  @IsNumber()
  PREMIUMCOLLECTED?: number;

  @IsOptional()
  @IsNumber()
  BALANCEAMOUNT?: number;

  @IsOptional()
  @IsDateString()
  INSTALMENTFROMDT?: string;

  @IsOptional()
  @IsDateString()
  INSTALMENTTODT?: string;
}

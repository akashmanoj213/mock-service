import { IsNumber, IsString } from 'class-validator';

export class SettlementDetailsDto {
  @IsNumber()
  approvedAmount: number;

  @IsNumber()
  clmCountryId: number;

  @IsString()
  clmCurrency: string;

  @IsString()
  countryName: string;

  @IsString()
  isoCode: string;

  @IsString()
  bankName: string;

  @IsString()
  bankIFSCCode: string;

  @IsString()
  accountNumber: string;

  @IsString()
  accountHolderName: string;

  @IsString()
  settlementDate: string;
}

import { Type } from 'class-transformer';
import { IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';

export class NewClaimBillDto {
  @IsNumber()
  id: number;

  @IsNumber()
  billId: number;

  @IsString()
  billType: string;

  @IsString()
  billNo: string;

  @IsString()
  billDate: string;

  @IsString()
  billDescription: string;

  @IsNumber()
  billAmount: number;

  @IsNumber()
  NoOfDocs: number;

  @IsNumber()
  payableAmount: number;

  @IsNumber()
  NonPayableAmount: number;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  address: string;

  @Type(() => Date)
  @IsDate()
  prescriptionDate: string;

  @IsString()
  doctorName: string;

  @IsString()
  doctorRegnNo: string;

  @IsString()
  gSTNo: string;

  @IsNumber()
  SlNo: number;

  @IsNumber()
  pinCode: number;

  @IsNumber()
  amount: number;

  @IsString()
  issuedBy: string;
}

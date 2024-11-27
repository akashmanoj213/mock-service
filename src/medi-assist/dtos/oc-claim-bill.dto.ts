import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class OcClaimBillDto {
  @IsString()
  billNo: string;

  @IsString()
  billDate: string;

  @IsString()
  description: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  id: number;

  @IsNumber()
  SlNo: number;

  @IsNumber()
  billId: number;

  @IsNumber()
  NonPayableAmount: number;

  @IsNumber()
  NoOfDocs: number;

  @IsString()
  NoPayableReason: string;

  @IsNumber()
  payableAmount: number;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  benefitCategory: string;

  @IsString()
  benefitSubCategory: string;

  @IsString()
  address: string;

  @IsString()
  prescriptionDate: string;

  @IsString()
  doctorName: string;

  @IsString()
  doctorRegnNo: string;

  @IsNumber()
  pinCode: number;

  @IsString()
  issuedBy: string;
}

import { IsNumber, IsString } from 'class-validator';

export class V3BillsDto {
  @IsNumber()
  clmBillID: number;

  @IsNumber()
  clmBillClmid: number;

  @IsNumber()
  clmBillCtype: number;

  @IsString()
  clmBillFor: string;

  @IsString()
  clmBillDate: string;

  @IsString()
  clmBillNo: string;

  @IsNumber()
  clmBillAmt: number;

  @IsNumber()
  clmPayableAmt: number;

  @IsNumber()
  clmdedreasonid: number;

  @IsNumber()
  clmBillCashless: number;

  @IsString()
  clmdedreasondesc: string;

  @IsNumber()
  clmnonpayableAmt: number;

  @IsNumber()
  clmMOUDiscount: number;

  @IsNumber()
  clmCoPayDiscount: number;

  @IsString()
  chargeType: string;
}

import { IsNumber, IsString } from 'class-validator';

export class V3DeductionDetailsDto {
  @IsNumber()
  slNo: number;

  @IsNumber()
  claimId: number;

  @IsNumber()
  deductionId: number;

  @IsString()
  remarks: string;

  @IsString()
  modifiedOn: string;

  @IsNumber()
  amount: number;

  @IsString()
  deductionType: string;

  @IsString()
  sourceDBType: string;
}

import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class NewClaimAttachmentsDto {
  @IsString()
  fileGUID: string;

  @IsString()
  fileName: string;

  @IsString()
  idName: string;

  @IsString()
  idNumber: string;

  @IsNumber()
  id: number;

  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  maid: number;

  @IsNumber()
  policyId: number;
}

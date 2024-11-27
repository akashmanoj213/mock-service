import { IsString, IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { NewClaimBillDto } from './new-claim-bill.dto';

export class ClaimBillAdditionRequestDto {
  @IsString()
  ClaimReferenceNumber: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NewClaimBillDto)
  Bills: NewClaimBillDto[];

  @IsNumber()
  userId: number;
}

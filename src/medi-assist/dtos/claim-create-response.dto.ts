import { IsString, IsBoolean, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OcClaimBillDto } from './oc-claim-bill.dto';

export class ClaimCreateResponseDto {
  @IsString()
  ClaimReferenceNo: string;

  @IsString()
  Message: string;

  @IsBoolean()
  IsDuplicate: boolean;

  @IsString()
  DuplicateClaimNumber: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OcClaimBillDto)
  Bills: OcClaimBillDto[];

  // Assuming 'Documents' can be of any type, so no specific validation
  Documents: any;
}

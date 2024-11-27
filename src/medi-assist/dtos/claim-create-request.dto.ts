import {
  IsBoolean,
  IsString,
  ValidateNested,
  IsArray,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { EncryptedFlexDetailsDto } from './encrypted-flex-details.dto';
import { NewClaimBillDto } from './new-claim-bill.dto';
import { NewClaimDataDto } from './new-claim-data.dto';

export class ClaimCreateRequestDto {
  @IsBoolean()
  isFinalSubmission: boolean;

  @IsBoolean()
  isCheckDuplicateClaim: boolean;

  @IsString()
  claimType: string;

  @ValidateNested()
  @Type(() => NewClaimDataDto)
  claimDetails: NewClaimDataDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NewClaimBillDto)
  bills: NewClaimBillDto[];

  @IsString()
  claimRegNo: string;

  @IsNumber()
  maid: number;

  @IsNumber()
  userId: number;

  @IsBoolean()
  isFlex: boolean;

  @ValidateNested()
  @Type(() => EncryptedFlexDetailsDto)
  flexPolicyDetails: EncryptedFlexDetailsDto;
}

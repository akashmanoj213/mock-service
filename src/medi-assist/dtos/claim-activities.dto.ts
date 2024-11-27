import { IsString, IsNumber } from 'class-validator';

export class ClaimActivitiesDto {
  @IsString()
  claimStatus: string;

  @IsString()
  claimAuditTime: string;

  @IsString()
  remarks: string;

  @IsString()
  updatedBy: string;

  @IsNumber()
  claimedAmount: number;

  @IsNumber()
  approvedAmount: number;

  @IsNumber()
  cumulativeAmount: number;

  @IsNumber()
  status: number;

  @IsString()
  auditStatus: string;

  @IsString()
  letterLink: string;

  @IsNumber()
  audittrialid: number;

  @IsNumber()
  claimId: number;
}

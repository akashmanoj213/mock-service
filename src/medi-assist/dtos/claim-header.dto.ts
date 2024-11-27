import { IsString, IsNumber } from 'class-validator';

export class ClaimHeaderDto {
  @IsString()
  clmCurrency: string;

  @IsNumber()
  actualClaimId: number;

  @IsString()
  benefContactNumber: string;

  @IsNumber()
  benefMaid: number;

  @IsString()
  benefName: string;

  @IsString()
  benefRelation: string;

  @IsString()
  claimContactNumber: string;

  @IsNumber()
  claimedToApprovedVariance: number;

  @IsString()
  claimId: string;

  @IsString()
  claimReceivedDate: string;

  @IsString()
  claimReferenceNo: string;

  @IsString()
  claimType: string;

  @IsNumber()
  clmAmount: number;

  @IsNumber()
  clmApprovedAmt: number;

  @IsString()
  clmLastUpdate: string;

  @IsString()
  countryName: string;

  @IsString()
  countryCurrency: string;

  @IsString()
  clmIncidentDate: string;

  @IsString()
  isoCode: string;

  @IsString()
  dbType: string;
}

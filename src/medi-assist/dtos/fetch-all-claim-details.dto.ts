import { IsBoolean, IsString, IsNumber } from 'class-validator';

export class FetchAllClaimDetailsDto {
  @IsBoolean()
  fetchPreAuthDetails: boolean;

  @IsBoolean()
  fetchHospDetails: boolean;

  @IsBoolean()
  fetchBankDetails: boolean;

  @IsBoolean()
  fetchBillDetails: boolean;

  @IsBoolean()
  fetchSettlement: boolean;

  @IsBoolean()
  fetchDenialReason: boolean;

  @IsBoolean()
  fetchAttachments: boolean;

  @IsBoolean()
  fetchClaimActivities: boolean;

  @IsBoolean()
  fetchKYCAttachments: boolean;

  @IsBoolean()
  fetchIRDocuments: boolean;

  @IsBoolean()
  maskData: boolean;

  @IsString()
  accessToken: string;

  @IsString()
  loginToken: string;

  @IsNumber()
  claimNumber: number;
}

import { IsNumber, IsBoolean, IsString } from 'class-validator';

export class FetchClaimsReqDto {
  @IsNumber()
  claimNumber: number;

  @IsBoolean()
  fetchPreAuthDetails: boolean;

  @IsBoolean()
  maskedData: boolean;

  @IsString()
  accessToken: string;
}

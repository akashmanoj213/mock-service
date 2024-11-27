import { IsString, IsNumber } from 'class-validator';

export class V3ClaimHospitalDetailsDto {
  @IsString()
  hospName: string;

  @IsNumber()
  hospID: number;

  @IsString()
  hospAddr1: string;

  @IsString()
  hospAddr2: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  location: string;

  @IsString()
  hospRohiniCode: string;

  @IsString()
  hospPincode: string;
}

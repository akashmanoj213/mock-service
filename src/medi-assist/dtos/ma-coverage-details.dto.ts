import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class MaCoverageDetailsDto {
  @IsString()
  COVERAGEID: string;

  @IsString()
  COVERAGENAME: string;

  @IsDateString()
  COVSTARTDATE: string;

  @IsDateString()
  COVENDDATE: string;

  @IsOptional()
  @IsNumber()
  COVBENEFAMT?: number;

  @IsOptional()
  @IsNumber()
  UTILIZATIONLIMIT?: number;
}

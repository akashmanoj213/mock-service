import { IsString, IsDateString, IsOptional } from 'class-validator';

export class MaPEDDetailsDto {
  @IsOptional()
  @IsString()
  ILLNESSNAME?: string;

  @IsOptional()
  @IsDateString()
  DIAGNOSISDT?: string;

  @IsOptional()
  @IsString()
  TREATMENT?: string;

  @IsOptional()
  @IsString()
  FULLYCURED?: string;

  @IsOptional()
  @IsString()
  PREEXISTILLKEY?: string;

  @IsOptional()
  @IsString()
  PREEXISTILLVALUE?: string;
}

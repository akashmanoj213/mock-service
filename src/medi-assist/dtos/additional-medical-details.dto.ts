import { IsString, IsDateString, IsOptional } from 'class-validator';

export class AdditionalMedicalDetailsDTO {
  @IsOptional()
  @IsString()
  ILLNESSNAME?: string;

  @IsOptional()
  @IsString()
  TREATMENT?: string;

  @IsOptional()
  @IsString()
  NATEUREOFHAZARDOUSOCCUPATION?: string;

  @IsOptional()
  @IsString()
  DETAILSOFPASTCLAIMAMOUNT?: string;

  @IsOptional()
  @IsString()
  AILMENTFORCLAIM?: string;

  @IsOptional()
  @IsString()
  SUFFERINGFLAG?: string;

  @IsOptional()
  @IsString()
  COMPLICATIONRECCURENCEFLAG?: string;

  @IsOptional()
  @IsString()
  HISTOPATHBIOPSYFLAG?: string;

  @IsOptional()
  @IsDateString()
  LASTCONSULTDT?: string;

  @IsOptional()
  @IsString()
  TREATMENTCD?: string;

  @IsOptional()
  @IsString()
  CURRENTSTATUSVAL?: string;

  @IsOptional()
  @IsString()
  EXACTDIAGNOSIS?: string;

  @IsOptional()
  @IsString()
  YEAROFDIAGNOSIS?: string;

  @IsOptional()
  @IsString()
  COMMENTS?: string;

  @IsOptional()
  @IsDateString()
  DIAGNOSISDT?: string;

  @IsOptional()
  @IsString()
  FULLYCURED?: string;
}

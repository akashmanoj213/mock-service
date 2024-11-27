import { IsString } from 'class-validator';

export class V3TreatmentDetailsDto {
  @IsString()
  ailmentName: string;

  @IsString()
  ailmentDesc: string;

  @IsString()
  ailmentBodySystem: string;
}

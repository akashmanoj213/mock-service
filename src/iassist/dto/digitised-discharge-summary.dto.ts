import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

class DischargeMedication {
  @IsString()
  @IsNotEmpty()
  dose: string;

  @IsString()
  @IsNotEmpty()
  frequency: string;

  @IsString()
  @IsNotEmpty()
  medicine: string;
}

class Result {
  // New class representing the nested result
  @IsString()
  @IsNotEmpty()
  brief_history: string;

  @IsString()
  @IsNotEmpty()
  date_of_admission: string;

  @IsString()
  @IsOptional() // date_of_discharge can be NIL
  date_of_discharge: string | null;

  @IsString()
  @IsNotEmpty()
  diagnosis: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DischargeMedication)
  discharge_medications: DischargeMedication[];

  @IsString()
  @IsNotEmpty()
  doctor_name: string;

  @IsString()
  @IsNotEmpty()
  general_examinations: string; // Use quotes for keys with spaces

  @IsString()
  @IsNotEmpty()
  hospital_address: string;

  @IsString()
  @IsNotEmpty()
  hospital_name: string;

  @IsArray()
  @IsString({ each: true })
  injections: string[];

  @IsString()
  @IsNotEmpty()
  patient_age: string;

  @IsString()
  @IsNotEmpty()
  patient_gender: string;

  @IsString()
  @IsNotEmpty()
  patient_name: string; // Use quotes for keys with spaces

  @IsString()
  @IsNotEmpty()
  'procedure/surgery/operation': string; // Use quotes for keys with special characters

  @IsString()
  @IsNotEmpty()
  recommendations: string;

  @IsString()
  @IsNotEmpty()
  ward: string;
}

class DischargeSummaryResult {
  @IsString()
  @IsNotEmpty()
  completion_time: string;

  @IsString()
  @IsNotEmpty()
  initialisation_time: string;

  @IsNumberString()
  page_count: string;

  @IsUUID()
  ref_id: string;

  @ValidateNested()
  @Type(() => Result)
  result: Result; // This now correctly represents the nested structure
}

export class DigitisedDischargeSummaryDto {
  @IsBoolean()
  ready: boolean;

  @ValidateNested()
  @Type(() => DischargeSummaryResult)
  result: DischargeSummaryResult;

  @IsBoolean()
  successful: boolean;
}

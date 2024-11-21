import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumberString,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

class PatientDetails {
  @IsString()
  @IsNotEmpty()
  UHID: string;

  @IsNumberString()
  @IsNotEmpty()
  age: string;

  @IsString()
  @IsNotEmpty()
  bill_date: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  lab_or_hospital_name: string;

  @IsString()
  @IsNotEmpty()
  patient_name: string;

  @IsString()
  @IsNotEmpty()
  reports_date: string;
}

class TestResult {
  @IsNumberString()
  @IsNotEmpty()
  page_no: string;

  @IsString()
  @IsNotEmpty()
  range: string;

  @IsString()
  @IsNotEmpty()
  result: string;

  @IsString()
  @IsNotEmpty()
  test_analytics: string;

  @IsString()
  @IsNotEmpty()
  test_name: string;

  @IsString()
  @IsNotEmpty()
  unit: string;
}

class LabReportResult {
  @ValidateNested()
  @Type(() => PatientDetails)
  patient_details: PatientDetails;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestResult)
  test_result: TestResult[];
}

class DigitisedLabReportResult {
  @IsString()
  @IsNotEmpty()
  completion_time: string;

  @IsString()
  @IsNotEmpty()
  initialisation_time: string;

  @IsNumberString()
  page_count: string; // Keep as string to handle "3"

  @IsUUID()
  ref_id: string; // Correcting key name and using quotes

  @ValidateNested()
  @Type(() => LabReportResult)
  result: LabReportResult;
}

export class DigitisedLabReportDto {
  @IsBoolean()
  ready: boolean;

  @ValidateNested()
  @Type(() => DigitisedLabReportResult)
  result: DigitisedLabReportResult;

  @IsBoolean()
  successful: boolean;
}

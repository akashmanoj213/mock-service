import {
  IsNumber,
  IsString,
  IsArray,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TatPredictedDateDto } from './tat-predicted-date.dto';
import { V3TreatmentDetailsDto } from './v3-treatment-details.dto';

export class BasicDetailsDto {
  @IsNumber()
  claimID: number;

  @IsString()
  claimRecdate: string;

  @IsString()
  claimType: string;

  @IsString()
  claimDoa: string;

  @IsString()
  claimDod: string;

  @IsString()
  lastDocumentReceivedDate: string;

  @IsNumber()
  claimAgingInMinutes: number;

  @IsNumber()
  claimAmount: number;

  @IsString()
  claimStatus: string;

  @IsNumber()
  claimNetPayAmount: number;

  @IsNumber()
  claimTypeID: number;

  @IsString()
  clmPreAuths: string;

  @IsNumber()
  clmstatusid: number;

  @IsString()
  patientName: string;

  @IsNumber()
  patientAge: number;

  @IsString()
  patientGender: string;

  @IsString()
  patientRelation: string;

  @IsString()
  roomType: string;

  @IsString()
  doctorName: string;

  @IsString()
  doctorRegNo: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => V3TreatmentDetailsDto)
  treatmentDetails: V3TreatmentDetailsDto[];

  @IsNumber()
  benefMAID: number;

  @IsString()
  mobileNo: string;

  @IsString()
  emailId: string;

  @IsString()
  claimStatusDesc: string;

  @IsNumber()
  clmApprovedAmount: number;

  @IsString()
  priBenefName: string;

  @IsString()
  insurerName: string;

  @IsString()
  clmcomprefno: string;

  @IsNumber()
  clmSourceID: number;

  @IsOptional() // Assuming tatPredictedDate can be optional
  @ValidateNested()
  @Type(() => TatPredictedDateDto)
  tatPredictedDate: TatPredictedDateDto;

  @IsString()
  priBenefEmpId: string;

  @IsString()
  claimReferenceNo: string;
}

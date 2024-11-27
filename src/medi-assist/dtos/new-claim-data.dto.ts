import {
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { OcClaimDocMappingDto } from './oc-claim-doc-mapping.dto';

export class NewClaimDataDto {
  @IsString()
  claimRegnNo: string;

  @IsNumber()
  policyId: number;

  @IsString()
  policyNumber: string;

  @IsString()
  employeeId: string;

  @IsString()
  mAID: string;

  @Type(() => Date)
  @IsDate()
  dOA: string;

  @Type(() => Date)
  @IsDate()
  dOD: string;

  @IsString()
  insurer: string;

  @IsNumber()
  hospId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OcClaimDocMappingDto)
  documents: OcClaimDocMappingDto[];

  @IsString()
  hospitalName: string;

  @IsNumber()
  hospCityId: number;

  @IsString()
  hospCityName: string;

  @IsNumber()
  hospStateId: number;

  @IsString()
  hospStateName: string;

  @IsNumber()
  benefId: number;

  @IsString()
  benefName: string;

  @IsNumber()
  benefRelation: number;

  @IsString()
  relationName: string;

  @IsNumber()
  benefAge: number;

  @IsString()
  benefMobileNo: string;

  @IsNumber()
  totalBillAmount: number;

  @IsString()
  userName: string;

  @IsString()
  checklist: string;

  @IsString()
  hospAddress: string;

  @IsString()
  injuryDesc: string;

  @IsString()
  benefAlphaCode: string;

  @Type(() => Date)
  @IsDate()
  treatmentStartDate: string;

  @Type(() => Date)
  @IsDate()
  treatmentEndDate: string;

  @IsString()
  doctorName: string;

  @IsString()
  doctorRegNo: string;

  @IsString()
  benefEmail: string;

  @IsString()
  ailment: string;

  @IsBoolean()
  isHospitalization: boolean;

  @IsBoolean()
  isPreHospitalization: boolean;

  @IsBoolean()
  isPostHospitalization: boolean;

  @IsString()
  roomType: string;

  @IsString()
  benefitCategory: string;

  @IsString()
  benefitSubcategory: string;

  @IsString()
  hospTelephoneNo: string;

  @IsString()
  hospPANNo: string;

  @IsString()
  paymentMode: string;

  @IsString()
  accountHolderName: string;

  @IsString()
  bankIFSCCode: string;

  @IsString()
  bankName: string;

  @IsString()
  bankAddress: string;

  @IsString()
  branchName: string;

  @IsNumber()
  accountNumber: number;

  @IsString()
  barCodeNo: string;

  @IsString()
  location: string;

  @IsString()
  durationOfIllness: string;

  @IsString()
  clinicName: string;

  @IsString()
  clinicPinCode: string;

  @IsString()
  claimSubmissionReason: string;

  @IsString()
  reasonForLateDischarge: string;

  @IsString()
  pANNumber: string;

  @IsNumber()
  aadharNumber: number;

  @IsString()
  treatmentType: string;

  @IsString()
  dropLocation: string;

  @IsString()
  dropAddress: string;

  @Type(() => Date)
  @IsDate()
  docSubmissionDate: string;

  @Type(() => Date)
  @IsDate()
  effectiveDate: string;

  @Type(() => Date)
  @IsDate()
  startDate: string;

  @Type(() => Date)
  @IsDate()
  endDate: string;

  @IsString()
  icdCode: string;

  @IsNumber()
  hospAmount: number;

  @IsNumber()
  claimId: number;

  @IsString()
  CountryOfIncidence: string;

  @Type(() => Date)
  @IsDate()
  DateOfIncidence: string;

  @IsString()
  Currency: string;

  @IsString()
  CountryOfTreatment: string;

  @IsString()
  HospitalZipCode: string;

  @IsString()
  PermanentAddress_Country: string;

  @IsString()
  PermanentAddress_ZipCode: string;

  @IsString()
  PermanentAddress_Addressline_1: string;

  @IsString()
  AccountReferenceId: string;
}

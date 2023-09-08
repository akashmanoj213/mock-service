import { ClaimType } from '../enums';
import { AccidentDetailsDto } from './accident-details.dto';
import { AdjudicationItemDto } from './adjudication-item.dto';
import { ClaimItemDto } from './claim-item.dto';
import { ClaimSettlementDto } from './claim-settlement.dto';
import { DoctorDeclarationDto } from './doctor-declaration.dto';
import { DoctorTreatmentDetailsDto } from './doctor-treatment-details.dto';
import { HospitalDeclarationDto } from './hospital-declaration.dto';
import { HospitalDetailsDto } from './hospital-details.dto';
import { MaternityDetailsDto } from './maternity-details.dto';
import { MemberDetailsDto } from './member-details.dto';
import { PatientAdmissionDetailsDto } from './patient-admission-details.dto';
import { PatientDeclarationDto } from './patient-declaration.dto';
import { PolicyDetailsDto } from './policy-details.dto';
import { TpaHospitalDetailsDto } from './tpa-hospital-details.dto';
import { TpaMemberDetailsDto } from './tpa-member-details.dto';
import { TpaPolicyDetailsDto } from './tpa-policy-details.dto';
import { VariationDataDto } from './variation-data.dto';

export enum ClaimStatus {
  INITIATED = 'initiated',
  VARIATIONS_DETECTED = 'variations detected',
  UNDER_REVIEW = 'under review',
  // REVIEW_COMPLETED = 'review completed',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PAYOUT_INITIATED = 'payout initiated',
  PAYOUT_COMPLETED = 'payout completed',
  COMPLETED = 'completed',
}

export class ClaimDto {
  id: number;
  policyNumber: number;
  insuranceCardNumber: number;
  hospitalId: number;
  contactNumber: string;
  claimStatus: ClaimStatus;
  claimType: ClaimType;
  isAccident: boolean;
  isPregnancy: boolean;
  totalClaimAmount: number;
  approvedPayableAmount: number;
  coPayableAmount: number;
  tpaId: number;
  isVariationDetected: boolean;
  isDischarged: boolean;
  createdAt: Date;
  updatedAt: Date;

  tpaPolicyDetails: TpaPolicyDetailsDto;
  tpaMemberDetails: TpaMemberDetailsDto;
  tpaHospitalDetails: TpaHospitalDetailsDto;
  doctorTreatmentDetails: DoctorTreatmentDetailsDto;
  patientAdmissionDetails: PatientAdmissionDetailsDto;
  patientDeclaration: PatientDeclarationDto;
  doctorDeclaration: DoctorDeclarationDto;
  hospitalDeclaration: HospitalDeclarationDto;
  policyDetails: PolicyDetailsDto;
  memberDetails: MemberDetailsDto;
  hospitalDetails: HospitalDetailsDto;
  maternityDetails?: MaternityDetailsDto;
  accidentDetails?: AccidentDetailsDto;
  claimItems: ClaimItemDto[];
  variations?: VariationDataDto[];
  adjudicationItems: AdjudicationItemDto[];
  claimSettlement: ClaimSettlementDto;
}

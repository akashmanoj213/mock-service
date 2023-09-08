import { Exclude, Expose } from 'class-transformer';
import { ClaimItemType, ClaimType } from '../enums';
import { MedicalAdjudicationResultDto } from './medical-adjudication-result.dto';
import { NonMedicalAdjudicationResultDto } from './non-medical-adjudication-result.dto';

export enum AdjudicationItemStatus {
  NON_MEDICAL_FWA_COMPLETED = 'non-medical FWA completed',
  NON_MEDICAL_FWA_FAILED = 'non-medical FWA failed',
  NON_MEDICAL_REVIEW_COMPLETED = 'non-medical review completed',
  MEDICAL_FWA_COMPLETED = 'medical FWA completed',
  MEDICAL_FWA_FAILED = 'medical FWA failed',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  QUERY = 'query',
  INTERVENTION = 'intervention',
}

@Exclude()
export class AdjudicationItemDto {
  @Expose()
  id: number;
  @Expose()
  claimId: number;
  @Expose()
  policyNumber: number;
  @Expose()
  insuranceCardNumber: number;
  @Expose()
  hospitalId: number;
  @Expose()
  claimType: ClaimType;
  @Expose()
  totalClaimAmount: number;
  @Expose()
  totalApprovedPayableAmount: number;
  @Expose()
  totalCoPayableAmount: number;
  @Expose()
  tpaId: number;
  @Expose()
  isAccident: boolean;
  @Expose()
  isPregnancy: boolean;
  @Expose()
  claimItemId: number;
  @Expose()
  claimItemType: ClaimItemType;
  @Expose()
  status: AdjudicationItemStatus;
  @Expose()
  claimItemTotalAmount: number;
  @Expose()
  approvedPayableAmount: number;
  @Expose()
  coPayableAmount: number;
  @Expose()
  nonMedicalFWAResult: string;
  @Expose()
  nonMedicalFWAReason: string;
  @Expose()
  medicalFWAResult: string;
  @Expose()
  medicalFWAReason: string;
  @Expose()
  createdAt: Date;
  @Expose()
  updatedAt: Date;
  @Expose()
  nonMedicalAdjudicationResult: NonMedicalAdjudicationResultDto;
  @Expose()
  medicalAdjudicationResult: MedicalAdjudicationResultDto;
}

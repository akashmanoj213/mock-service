import { ClaimItemType } from '../enums';
import { ClaimItemDocumentDto } from './claim-item-document.dto';

export enum ClaimItemStatus {
  INITIATED = 'initiated',
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

export class ClaimItemDto {
  id: number;
  claimItemType: ClaimItemType;
  claimItemStatus: ClaimItemStatus;
  totalAmount: number;
  approvedPayableAmount: number;
  coPayableAmount: number;
  nonMedicalFWAResult: string;
  nonMedicalFWAReason: string;
  nonMedicalAdjudicationResult: string;
  medicalAdjudicationResult: string;
  medicalFWAResult: string;
  medicalFWAReason: string;
  createdAt: Date;
  updatedAt: Date;

  documents: ClaimItemDocumentDto[];
}

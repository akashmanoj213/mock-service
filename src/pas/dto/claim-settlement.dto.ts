import { ClaimType, PaymentStatus } from '../enums';
import { ClaimStatus } from './claim.dto';

export class ClaimSettlementDto {
  id: number;
  claimId: number;
  claimType: ClaimType;
  claimStatus: ClaimStatus;
  approvedPayableAmount: number;
  coPayableAmount: number;
  bankAccountNumber: string;
  bankIfscCode: string;
  bankAccountName: string;
  contactNumber: string;
  paymentId: number;
  paymentStatus: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}

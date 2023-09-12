import { Gender } from '../enums';

export class MemberDetailsDto {
  id?: number;
  memberId: number;
  policyId: number;
  sumInsured: number;
  contactNumber: string;
  fullName: string;
  gender: Gender;
  email: string;
  communicationPreference: string;
  exclusions: string;
  memberBenefits: string;
  memberDeductions: number;
  memberCapping: number;
  memberWaitingPeriod: number;
  numberOfClaims: number;
  isInstantCashless: boolean;
  createdAt: Date;
  updatedAt: Date;
}

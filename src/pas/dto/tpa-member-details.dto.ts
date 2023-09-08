import { Gender } from '../enums';

export class TpaMemberDetailsDto {
  id: number;
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
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

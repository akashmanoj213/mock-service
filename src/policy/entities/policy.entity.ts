import { Member } from './member.entity';

export class Policy {
  id: number;
  startDate: Date;
  endDate: Date;
  policyBenefits: string;
  sumInsured: number;
  policyDeductions: number;
  policyCapping: number;
  policyWaitingPeriod: number;
  totalNumberOfClaims: number;
  caretakerContactNumber: string;
  members: Member[];
}

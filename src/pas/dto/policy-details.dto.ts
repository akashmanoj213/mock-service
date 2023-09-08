export class PolicyDetailsDto {
  id: number;
  policyId: number;
  startDate: Date;
  endDate: Date;
  policyBenefits: string;
  sumInsured: number;
  policyDeductions: number;
  policyCapping: number;
  policyWaitingPeriod: number;
  totalNumberOfClaims: number;
  createdAt: Date;
  updatedAt: Date;
}

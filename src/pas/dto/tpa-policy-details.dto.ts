export class TpaPolicyDetailsDto {
  id: number;
  policyId: number;
  startDate: Date;
  endDate: Date;
  sumInsured: number;
  policyBenefits: string;
  policyDeductions: number;
  policyCapping: number;
  policyWaitingPeriod: number;
  totalNumberOfClaims: number;
  createdAt: Date;
  updatedAt: Date;
}

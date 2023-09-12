export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export class Member {
  id: number;
  sumInsured: number;
  contactNumber: string;
  email: string;
  fullName: string;
  gender: Gender;
  communicationPreference: string;
  exclusions: string;
  memberBenefits: string;
  memberDeductions = 0.0;
  memberCapping: number;
  memberWaitingPeriod: number;
  numberOfClaims: number;
  isInstantCashless: boolean;
  startDate: Date;
  endDate: Date;
}

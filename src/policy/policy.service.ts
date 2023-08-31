import { Injectable } from '@nestjs/common';
import { Policy } from './entities/policy.entity';
import { Gender } from './entities/member.entity';

@Injectable()
export class PolicyService {
  private readonly policies: Policy[] = [
    {
      id: 1000,
      sumInsured: 10000000.5,
      startDate: new Date('01/01/2023'),
      endDate: new Date('12/30/2023'),
      policyBenefits: 'All critical illness',
      policyDeductions: 0.0,
      policyCapping: null,
      policyWaitingPeriod: 0,
      totalNumberOfClaims: 3,
      members: [
        {
          id: 5001,
          fullName: 'Akash Manoj',
          gender: Gender.MALE,
          sumInsured: 5000000.5,
          contactNumber: '9972976940',
          email: 'akashmanoj213@gmail.com',
          communicationPreference: 'whatsapp',
          exclusions: 'NA',
          memberBenefits: 'All Critical Illness',
          memberDeductions: 0.0,
          memberCapping: null,
          memberWaitingPeriod: 0,
          numberOfClaims: 1,
          startDate: new Date('01/01/2023'),
          endDate: new Date('12/30/2023'),
        },
        {
          id: 5002,
          sumInsured: 5000000.5,
          fullName: 'John Doe',
          gender: Gender.MALE,
          contactNumber: '9759475643',
          email: 'johndow@gmeil.com',
          communicationPreference: 'whatsapp',
          exclusions: 'NA',
          memberBenefits: 'All Critical Illness',
          memberDeductions: 2000,
          memberCapping: 100000.0,
          memberWaitingPeriod: 30,
          numberOfClaims: 2,
          startDate: new Date('01/01/2023'),
          endDate: new Date('12/30/2023'),
        },
      ],
    },
    {
      id: 1001,
      sumInsured: 7000000.0,
      startDate: new Date('03/01/2023'),
      endDate: new Date('02/29/2024'),
      policyBenefits: 'Only cancer-related treatments covered',
      policyDeductions: 0.0,
      policyCapping: null,
      policyWaitingPeriod: 60,
      totalNumberOfClaims: 0,
      members: [
        {
          id: 5003,
          fullName: 'Jane Doe',
          gender: Gender.FEMALE,
          sumInsured: 7000000.0,
          contactNumber: '9845673823',
          email: 'janeDow@gmail.com',
          communicationPreference: 'whatsapp',
          exclusions: 'NA',
          memberBenefits: 'All Critical Illness',
          memberDeductions: 0.0,
          memberCapping: null,
          memberWaitingPeriod: 0,
          numberOfClaims: 0,
          startDate: new Date('03/01/2023'),
          endDate: new Date('02/29/2024'),
        },
      ],
    },
  ];

  findAll() {
    return this.policies;
  }

  findOne(id: number) {
    return this.policies.find((policy) => policy.id === id);
  }
}

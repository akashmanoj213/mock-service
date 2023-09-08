import { AdjVariationDataDto } from './adj-variation-data.dto';

export enum MedicalAdjudicationDecision {
  APPROVED = 'approved',
  REJECTED = 'rejected',
  //   QUERY = 'query', // TO-DO
  //   INTERVENTION = 'intervention', // TO-DO
}

export class MedicalAdjudicationResultDto {
  id: number;
  decision: MedicalAdjudicationDecision;
  approvedPayableAmount: number;
  coPayableAmount: number;
  overallComment: string;

  variations: AdjVariationDataDto[];
}

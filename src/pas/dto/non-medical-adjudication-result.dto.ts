import { AdjVariationDataDto } from './adj-variation-data.dto';

export class NonMedicalAdjudicationResultDto {
  id: number;
  overallComment: string;

  variations: AdjVariationDataDto[];
}

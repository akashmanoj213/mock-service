export enum AdjudicationType {
  NON_MEDICAL = 'non-medical',
  MEDICAL = 'medical',
}

export class AdjVariationDataDto {
  id: number;
  fieldName: string;
  comment: string;
  adjudicationType: AdjudicationType;
}

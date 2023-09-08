export class VariationDataDto {
  id: number;
  sectionName: string;
  fieldName: string;
  originalStringValue?: string;
  receivedStringValue?: string;
  originalDecimalValue?: number;
  receivedDecimalValue?: number;
  createdAt: Date;
  updatedAt: Date;
}

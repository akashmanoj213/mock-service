export enum DocumentType {
  DISCHARGE_SUMMARY = 'discharge_summary',
  LAB_REPORT = 'lab_report',
  COMBINED = 'combined',
}

export enum DigitisationStatus {
  INITIATED = 'initiated',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export class DocumentEntity {
  traceparentId: string;
  documentType?: DocumentType;
  digitisationStatus: DigitisationStatus = DigitisationStatus.INITIATED;
  fileName?: string;
  responseMessage?: string;
  errorMessage?: number;
  responseStatus?: number;
  referenceId?: string;
  response?: any;
}

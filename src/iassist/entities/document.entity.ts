export enum DocumentType {
  DISCHARGE_SUMMARY = 'discharge_summary',
  LAB_REPORT = 'lab_report',
}

export enum DigitisationStatus {
  INITIATED = 'initiated',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export class DocumentEntity {
  trackingId: number;
  documentType: DocumentType;
  digitisationStatus: DigitisationStatus = DigitisationStatus.INITIATED;
  responseMessage?: string;
  responseStatus?: string;
  referenceId?: string;
  taskId?: string;
}

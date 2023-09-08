export enum LineOfTreatment {
  MEDICAL_MANAGEMENT = 'Medical Management',
  SURGICAL_MANAGEMENT = 'Surgical Management',
  INTENSIVE_CARE = 'Intensive Care',
  INVESTIGATION = 'Investigation',
  NONALLOPATHICTREATMENT = 'Non-Allopathic treatment',
}

export class DoctorTreatmentDetailsDto {
  id: number;
  doctorName: string;
  doctorContactNumber: string;
  diseaseName: string;
  clinicalFindings: string;
  ailmentDuration: number;
  dateOfFirstConsult: Date;
  pastHistoryOfAilment: string;
  provisionalDiagnosis: string;
  ICD11Code: string;
  proposedLineOfTreatment: LineOfTreatment;
  investigationOrMedicalDetails: string;
  routeOfDrugAdministration: string;
  nameOfSurgery: string;
  surgeryICD11Code: string;
  otherTreatmentDetails?: string;
  InjuryReason: string;
  createdAt: Date;
  updatedAt: Date;
}

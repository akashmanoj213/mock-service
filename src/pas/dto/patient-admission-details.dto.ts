import { PastChronicIllnessDto } from './past-chronic-illness.dto';

export enum RoomType {
  AC = 'AC',
  NONAC = 'Non-AC',
}

export class PatientAdmissionDetailsDto {
  id: number;
  patientFullName: string;
  patientGender: string;
  patientDob: Date;
  dateAndTimeOfAdmission: Date;
  contactNumber: string;
  alternateContactNumber: string;
  isEmergencyHospitalisation: boolean;
  isPlannedHospitalisation: boolean;
  expectedNumberOfDaysStay: number;
  expectedDaysInICU: number;
  roomType: RoomType;
  roomNursingPatientDietCharges: number;
  expectedInvestigationDiagnosticsCost: number;
  ICUCharges: number;
  OTCharges: number;
  professionalAnestheticFeesCosultationCharges: number;
  medicineConsumableImplantCharges: number;
  otherHospitalExpenses: number;
  allInclusivePackageCharges: number;
  sumTotalExpectedHospitalisationCost: number;
  createdAt: Date;
  updatedAt: Date;

  pastHistoryOfChronicIllness: PastChronicIllnessDto[];
}

export class PatientDeclarationDto {
  id: number;
  patientName: string;
  contactNumber: string;
  emailId: string;
  declarationDateTime: Date;
  isSigned: boolean;
  createdAt: Date;
}

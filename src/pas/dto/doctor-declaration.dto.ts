export class DoctorDeclarationDto {
  id: number;
  treatingDoctorName: string;
  qualification: string;
  registrationNumberWithStateCode: string;
  declarationDateTime: Date;
  isSigned: boolean;
  createdAt: Date;
}

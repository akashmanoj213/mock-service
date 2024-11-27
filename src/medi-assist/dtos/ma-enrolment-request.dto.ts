import { ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { MaEnrolmentBeneficiaryDetailsDto } from './ma-enrolment-beneficiary-details.dto';
import { MaEnrolmentPolicyDetailsDto } from './ma-enrolment-policy-details.dto';

export class MAEnrolmentRequestDTO {
  @ValidateNested()
  @Type(() => MaEnrolmentPolicyDetailsDto)
  _MAEnrolmentDTOPolicyFields: MaEnrolmentPolicyDetailsDto;

  @ValidateNested({ each: true })
  @Type(() => MaEnrolmentBeneficiaryDetailsDto)
  @IsArray()
  _MAEnrolmentDTOBeneficiaryFields: MaEnrolmentBeneficiaryDetailsDto[];
}

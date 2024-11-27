import { IsBoolean, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { MaEnrolmentPolicyDetailsDto } from './ma-enrolment-policy-details.dto';
import { MaEnrolmentBeneficiaryDetailsDto } from './ma-enrolment-beneficiary-details.dto';
import { MaCoverageDetailsDto } from './ma-coverage-details.dto';
import { MaRecurringPremiumCyclesDto } from './ma-recurring-premium-cycles.dto';
import { MaNomineeDetailsDto } from './ma-nominee-details.dto';

class IsValid {
  @IsBoolean()
  IsSuccess: boolean;

  @IsArray()
  RowValidationMessage: string[];

  @IsArray()
  BusinessValidationMessage: string[];
}

export class MAEnrolmentResponseDTO {
  @ValidateNested()
  @Type(() => MaEnrolmentPolicyDetailsDto)
  _MAEnrolmentDTOPolicyFields: MaEnrolmentPolicyDetailsDto;

  @ValidateNested({ each: true })
  @Type(() => MaEnrolmentBeneficiaryDetailsDto)
  @IsArray()
  _MAEnrolmentDTOBeneficiaryFields: MaEnrolmentBeneficiaryDetailsDto[];

  @ValidateNested()
  @Type(() => MaCoverageDetailsDto)
  MACoverageDTODetails: MaCoverageDetailsDto[];

  @ValidateNested()
  @Type(() => MaRecurringPremiumCyclesDto)
  MARecurringPremiumCyclesDTODetails: MaRecurringPremiumCyclesDto[];

  @ValidateNested()
  @Type(() => MaNomineeDetailsDto)
  MANomineeDTODetails: MaNomineeDetailsDto[];

  @ValidateNested()
  @Type(() => IsValid)
  IsValid: IsValid;
}

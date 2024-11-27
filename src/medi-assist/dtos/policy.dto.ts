import { IsString, IsNumber, IsDateString, IsEnum } from 'class-validator';
import { ServiceType } from './ma-enrolment-policy-details.dto';

export class PolicyDto {
  @IsString()
  policyId: string;

  @IsString()
  memberName: string;

  @IsDateString()
  policyStartDate: string;

  @IsDateString()
  policyEndDate: string;

  @IsNumber()
  tenure: number;

  @IsEnum(ServiceType)
  policyType: ServiceType;

  @IsString()
  productName: string;

  @IsNumber()
  sumInsured: number;
}

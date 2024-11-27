import {
  IsString,
  IsBoolean,
  IsNumber,
  IsDateString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { MaNomineeDetailsDto } from './ma-nominee-details.dto';
import { Type } from 'class-transformer';
import { MaRecurringPremiumCyclesDto } from './ma-recurring-premium-cycles.dto';

export enum ServiceType {
  NewBusiness = 'New Business',
  Portability = 'Portability',
  Endorsement = 'Endorsement',
  Renewals = 'Renewals',
}

export enum EndorsementStatus {
  Enforced = 'Enforced',
  Expired = 'Expired',
  Terminated = 'Terminated',
  Cancelled = 'Cancelled',
}

export enum ProposalType {
  Individual = 'Individual',
  FamilyFloater = 'Family Floater',
  Family = 'Family',
}

export class MaEnrolmentPolicyDetailsDto {
  @IsString()
  POLNUM: string;

  @IsDateString()
  POLSTARTDATE: string;

  @IsDateString()
  POLENDDATE: string;

  @IsBoolean()
  ISRENEW: boolean;

  @IsOptional()
  @IsString()
  PREVPOL?: string;

  @IsOptional()
  @IsString()
  POLYR?: string;

  @IsString()
  INSURERNAME: string;

  @IsString()
  CLIENTTYPE: string;

  @IsOptional()
  @IsString()
  IRDATYPE?: string;

  @IsNumber()
  POLTERM: number;

  @IsDateString()
  ISSUEDATE: string;

  @IsOptional()
  @IsString()
  ZONE?: string;

  @IsOptional()
  @IsNumber()
  MAXADULT?: number;

  @IsOptional()
  @IsNumber()
  MAXDEPCHILD?: number;

  @IsEnum(ServiceType)
  SRVTYPE: ServiceType;

  @IsString()
  TPAID: string;

  @IsString()
  TPANAME: string;

  @IsOptional()
  @IsString()
  SUBCHNL?: string;

  @IsOptional()
  @IsNumber()
  COPAY?: number;

  @IsOptional()
  @IsString()
  PPN?: string;

  @IsOptional()
  @IsString()
  TAXAD1?: string;

  @IsOptional()
  @IsString()
  TAXAD2?: string;

  @IsOptional()
  @IsString()
  TAXAD3?: string;

  @IsOptional()
  @IsString()
  TAXAD4?: string;

  @IsOptional()
  @IsString()
  TAXAD5?: string;

  @IsOptional()
  @IsNumber()
  TAXPOST?: number;

  @IsString()
  MAILAD1: string;

  @IsOptional()
  @IsString()
  MAILAD2?: string;

  @IsString()
  MAILAD3: string;

  @IsString()
  MAILAD4: string;

  @IsString()
  MAILAD5: string;

  @IsNumber()
  MAILPOST: number;

  @IsOptional()
  @IsNumber()
  MOBILEPHONE?: number;

  @IsOptional()
  @IsNumber()
  RESPHONE?: number;

  @IsOptional()
  @IsNumber()
  BUSPHONE?: number;

  @IsOptional()
  @IsString()
  EMAILACCOUNT?: string;

  @IsOptional()
  @IsBoolean()
  PAYMENTCONFIRMED?: boolean;

  @IsOptional()
  @IsBoolean()
  HNICUSTOMER?: boolean;

  @IsOptional()
  @IsBoolean()
  NRICUSTOMER?: boolean;

  @IsEnum(EndorsementStatus)
  ENDORSSTATUS: EndorsementStatus;

  @IsOptional()
  @IsString()
  ENDREFFDTTM?: string;

  @IsOptional()
  @IsString()
  ENDORSTYPE?: string;

  @IsOptional()
  @IsString()
  ENDORSSOURCE?: string;

  @IsOptional()
  @IsString()
  FINIMPACT?: string;

  @IsOptional()
  @IsString()
  CALCTYPE?: string;

  @IsOptional()
  @IsString()
  ENDORSAMT?: string;

  @IsOptional()
  @IsString()
  ENDORSREMARKS?: string;

  @IsOptional()
  @IsString()
  BRANCH?: string;

  @IsOptional()
  @IsString()
  DISTRIBUTEDCH?: string;

  @IsString()
  PRODID: string;

  @IsString()
  PRODNAME: string;

  @IsString()
  AGENTNAME: string;

  @IsString()
  AGENTID: string;

  @IsString()
  AGENTMOBILE: string;

  @IsString()
  AGENTEMAILID: string;

  @IsOptional()
  @IsString()
  PAYOUTOPT?: string;

  @IsOptional()
  @IsBoolean()
  REDUBALSIOP?: boolean;

  @IsOptional()
  @IsNumber()
  SUMBENAMT?: number;

  @IsOptional()
  @IsString()
  PREVPOLICY?: string;

  @IsOptional()
  @IsString()
  PREVEXPDT?: string;

  @IsOptional()
  @IsNumber()
  PREVSI?: number;

  @IsOptional()
  @IsString()
  SPTPOL1?: string;

  @IsOptional()
  @IsString()
  SPTPOL2?: string;

  @IsOptional()
  @IsString()
  RENEWALID?: string;

  @IsEnum(ProposalType)
  PROPOSALTYPE: ProposalType;

  @IsOptional()
  @IsNumber()
  CURRENTPOLICYHMB_POLICY?: number;

  @IsOptional()
  @IsNumber()
  BALANCEHMBAMOUNT_POLICY?: number;

  @IsOptional()
  @IsNumber()
  HMBFROMREWARDPOINTS_POLICY?: number;

  @IsOptional()
  @IsNumber()
  TOTALHMBAMOUNT_POLICY?: number;

  @IsOptional()
  @IsNumber()
  TotalCumulativeBonusPercentagefromCB_CBB_POLICY?: number;

  @IsOptional()
  @IsNumber()
  CUMULATIVEBONUSAMOUNTFROMCB_CBB_POLICY?: number;

  @IsOptional()
  @IsString()
  OptionalPolicyExtra1?: string;

  @IsOptional()
  @IsString()
  OptionalPolicyExtra2?: string;

  @IsOptional()
  @IsString()
  OptionalPolicyExtra3?: string;

  @IsOptional()
  @IsString()
  OptionalPolicyExtra4?: string;

  @IsOptional()
  @IsString()
  OptionalPolicyExtra5?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MaNomineeDetailsDto)
  MANomineeDTODetails: MaNomineeDetailsDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MaRecurringPremiumCyclesDto)
  MARecurringPremiumCyclesDTODetails: MaRecurringPremiumCyclesDto[];
}

import { ValidateNested, IsBoolean, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { AuditTrailDto } from './audit-trail.dto';
import { BasicDetailsDto } from './basic-details.dto';
import { ClaimBankDetailsDto } from './claim-bank-details.dto';
import { SettlementDetailsDto } from './setllement-details.dto';
import { V3AttachmentsDto } from './v3-attachments.dto';
import { V3BillsDto } from './v3-bills.dto';
import { V3ClaimHospitalDetailsDto } from './v3-claim-hospital-details.dto';
import { V3DeductionDetailsDto } from './v3-deduction-details.dto';
import { V3DenialClauseDto } from './v3-denial-clause.dto';
import { V3IrDocsDto } from './v3-ir-docs.dto';

export class V3ClaimDetailsDto {
  @ValidateNested()
  @Type(() => BasicDetailsDto)
  basicDetails: BasicDetailsDto;

  @ValidateNested()
  @Type(() => V3ClaimHospitalDetailsDto)
  hospDetails: V3ClaimHospitalDetailsDto;

  @ValidateNested()
  @Type(() => ClaimBankDetailsDto)
  bankDetails: ClaimBankDetailsDto;

  @ValidateNested({ each: true })
  @Type(() => V3BillsDto)
  billDetails: V3BillsDto[];

  @ValidateNested({ each: true })
  @Type(() => V3AttachmentsDto)
  claimDocuments: V3AttachmentsDto[];

  @ValidateNested()
  @Type(() => SettlementDetailsDto)
  settlement: SettlementDetailsDto;

  @ValidateNested()
  @Type(() => V3DenialClauseDto)
  denialReason: V3DenialClauseDto;

  @ValidateNested({ each: true })
  @Type(() => V3DeductionDetailsDto)
  deductionDetails: V3DeductionDetailsDto[];

  @ValidateNested()
  @Type(() => AuditTrailDto)
  claimAuditTrail: AuditTrailDto;

  @IsBoolean()
  isKycAvailable: boolean;

  @IsBoolean()
  isKycRequired: boolean;

  @ValidateNested()
  @Type(() => V3IrDocsDto)
  irDocs: V3IrDocsDto;

  @IsString()
  dbType: string;
}

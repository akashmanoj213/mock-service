import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DocumentsDto } from './documents.dto';
import { V3ClaimKycAttachmentDocumentsDto } from './v3-claim-kyc-attachments.dto';

export class V3IrDocsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DocumentsDto)
  medicalDocs: DocumentsDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => V3ClaimKycAttachmentDocumentsDto)
  kycDocs: V3ClaimKycAttachmentDocumentsDto[];
}

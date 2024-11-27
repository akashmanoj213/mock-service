import {
  IsNumber,
  IsString,
  IsBoolean,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { KycAttachmentDocumentDetailDto } from './kyc-attachment-document-detail.dto';

export class V3ClaimKycAttachmentDocumentsDto {
  @IsNumber()
  maid: number;

  @IsString()
  tag: string;

  @IsBoolean()
  isEdited: boolean;

  @IsBoolean()
  isRequired: boolean;

  @IsBoolean()
  isAvailable: boolean;

  @IsString()
  documentStatus: string;

  @IsString()
  verifiedByUsername: string;

  @IsNumber()
  governmentDocumentTypeID: number;

  @IsString()
  documentNumber: string;

  @IsString()
  governmentDocumentType: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => KycAttachmentDocumentDetailDto)
  documentDetails: KycAttachmentDocumentDetailDto[];
}

import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class V3AttachmentsDto {
  @IsNumber()
  attachmentid: number;

  @IsNumber()
  attachclmid: number;

  @IsString()
  attachfilename: string;

  @IsString()
  attachedon: string;

  @IsNumber()
  attachDocTypeID: number;

  @IsString()
  attachTags: string;

  @IsString()
  dmsFilePath: string;

  @IsString()
  modifiedon: string;

  @IsString()
  attachUserName: string;

  @IsString()
  attachTagsUserName: string;

  @IsString()
  sourceDBType: string;

  @IsNumber()
  dmsAttachmentID: number;

  @IsNumber()
  dmsAttachmentClmid: number;

  @IsString()
  dmsAttachmentPath: string;

  @IsString()
  dmsAttacheddate: string;

  @IsString()
  dmsAttachFileName: string;

  @IsString()
  dmsSource: string;

  @IsBoolean()
  isInternal: boolean;
}

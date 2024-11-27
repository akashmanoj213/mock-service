import { IsString } from 'class-validator';

export class KycAttachmentDocumentDetailDto {
  @IsString()
  path: string;

  @IsString()
  fileName: string;

  @IsString()
  expiryDate: string;

  @IsString()
  digitisedJSON: string;
}

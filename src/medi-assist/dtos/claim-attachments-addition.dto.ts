import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { NewClaimAttachmentsDto } from './new-claim-attachments.dto';

export class ClaimAttachmentsAdditionDto {
  @IsNumber()
  userId: number;

  @IsString()
  ClaimReferenceNumber: string;

  @IsString()
  PanNumber: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NewClaimAttachmentsDto)
  Attachments: NewClaimAttachmentsDto[];

  @IsString()
  OnlineClaimType: string;
}

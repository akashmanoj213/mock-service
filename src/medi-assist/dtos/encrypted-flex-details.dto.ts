import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BillDetailsDto } from './bill-details.dto';

export class EncryptedFlexDetailsDto {
  @IsString()
  policyName: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BillDetailsDto)
  services: BillDetailsDto[];

  @IsString()
  encrytpedToken: string;
}

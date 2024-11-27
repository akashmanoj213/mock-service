import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class OcClaimDocMappingDto {
  @IsString()
  azurePath: string;

  @IsString()
  fileName: string;

  @IsNumber()
  id: number;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  docID: string;
}

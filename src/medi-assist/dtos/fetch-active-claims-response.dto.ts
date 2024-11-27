import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ClaimHeaderDto } from './claim-header.dto';

export class FetchActiveClaimsResponseDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimHeaderDto)
  claims: ClaimHeaderDto[];
}

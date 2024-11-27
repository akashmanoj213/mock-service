import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { V3ClaimDetailsDto } from './v3-claim-details.dto';

export class FetchClaimsResDto {
  @ValidateNested()
  @Type(() => V3ClaimDetailsDto)
  claims: V3ClaimDetailsDto;
}

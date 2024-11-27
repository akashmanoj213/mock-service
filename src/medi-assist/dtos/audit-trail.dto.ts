import {
  IsArray,
  IsString,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ClaimActivitiesDto } from './claim-activities.dto';

export class AuditTrailDto {
  @IsArray()
  @IsString({ each: true }) // Each item in the array should be a string
  forthStatus: string[];

  @IsArray()
  @ArrayNotEmpty() // Ensure the array is not empty
  @ValidateNested({ each: true }) // Validate each item in the array
  @Type(() => ClaimActivitiesDto)
  audtiTrails: ClaimActivitiesDto[];
}

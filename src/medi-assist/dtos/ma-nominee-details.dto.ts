import { IsString, IsNumber, IsOptional, IsIn, IsEnum } from 'class-validator';

export enum Relationship {
  Brother = 'BR',
  Daughter = 'DA',
  Father = 'FA',
  Husband = 'HU',
  Mother = 'MO',
  Other = 'OTHER',
  Sister = 'SISTER',
  Son = 'SO',
  Wife = 'WI',
}

export class MaNomineeDetailsDto {
  @IsString()
  NOMINEENAME: string;

  @IsEnum(Relationship)
  RELATIONSHIP: Relationship;

  @IsOptional()
  @IsString()
  APPOINTEENAME?: string;

  @IsOptional()
  @IsString()
  APPOINTEEREL?: string;

  @IsOptional()
  @IsNumber()
  NOMINEEAGE?: number;
}

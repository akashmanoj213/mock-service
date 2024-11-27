import { IsString, IsNumber } from 'class-validator';

export class V3DenialClauseDto {
  @IsString()
  denialClauseID: string;

  @IsString()
  description: string;

  @IsNumber()
  claimID: number;

  @IsString()
  modifiedOn: string;

  @IsString()
  sourceDBType: string;
}

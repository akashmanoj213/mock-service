import { IsString } from 'class-validator';

export class TatPredictedDateDto {
  @IsString()
  Approval: string;

  @IsString()
  Settlement: string;
}

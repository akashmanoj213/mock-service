import { IsNumber } from 'class-validator';

export class ClaimStatusResponseDto {
  @IsNumber()
  status: number;
}

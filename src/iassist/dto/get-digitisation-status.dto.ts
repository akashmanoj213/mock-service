import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetDigitisationStatusDto {
  @IsNotEmpty()
  @IsUUID()
  taskId: string;
}

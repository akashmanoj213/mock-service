// iassist/dto/iassist-response.dto.ts
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class IassistResponseDto {
  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsUUID()
  ref_id: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsUUID()
  task_id: string;

  @IsNotEmpty()
  @IsString() // Or IsNumberString if you expect it as a string
  tracking_id: string;
}

// iassist/dto/iassist-response.dto.ts
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Transform } from 'class-transformer';

export class ResultDto {
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  completed_time: Date;

  @IsString()
  error_message: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  received_time: string;

  @IsNotEmpty()
  @IsUUID()
  ref_id: string;

  response: any;

  @IsNotEmpty()
  @IsString()
  service_status: string;

  @IsNotEmpty()
  status_code: number;
}

export class DataDto {
  @IsNotEmpty()
  result: ResultDto;
}

export class IassistResponseDto {
  @IsNotEmpty()
  data: DataDto;
}

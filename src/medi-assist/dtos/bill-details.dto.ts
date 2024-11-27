import { IsNumber, IsString } from 'class-validator';

export class BillDetailsDto {
  @IsNumber()
  billTypeId: number;

  @IsString()
  billCategoryName: string;
}

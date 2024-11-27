import { IsNumber, IsString } from 'class-validator';

export class DocumentsDto {
  @IsNumber()
  clmdocclmid: number;

  @IsNumber()
  clmdocdocid: number;

  @IsNumber()
  clmdocisavailable: number;

  @IsNumber()
  clmdocisrequired: number;

  @IsString()
  clmdocremarks: string;

  @IsString()
  clmdocName: string;

  @IsNumber()
  clmdocCashless: number;

  @IsString()
  modifiedon: string;

  @IsString()
  clmDocSpecialRemarks: string;

  @IsString()
  irType: string;

  @IsString()
  sourceDBType: string;
}

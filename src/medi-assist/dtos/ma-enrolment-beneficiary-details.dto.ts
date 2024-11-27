import {
  IsString,
  IsBoolean,
  IsNumber,
  IsDateString,
  IsOptional,
  IsEnum,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { MaCoverageDetailsDto } from './ma-coverage-details.dto';
import { MaPEDDetailsDto } from './ma-ped-details.dto';
import { AdditionalMedicalDetailsDTO } from './additional-medical-details.dto';
import { Type } from 'class-transformer';

enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

enum Relation {
  Both = 'both',
  Fath = 'fath',
  Flaw = 'flaw',
  Gdau = 'gdau',
  Gfat = 'gfat',
  Gmot = 'gmot',
  Gson = 'gson',
  Mlaw = 'mlaw',
  Moth = 'moth',
  Self = 'self',
  Sist = 'sist',
  Husband = 'husband',
  Son = 'son',
  Wife = 'wife',
  Udtr = 'udtr',
  Slaw = 'slaw',
  Dlaw = 'dlaw',
  Uncle = 'uncle',
  Aunty = 'aunty',
  Nephew = 'nephew',
  Niece = 'niece',
  Empboth = 'empboth',
  Empfath = 'empfath',
  Empflaw = 'empflaw',
  Empgdau = 'empgdau',
  Empgfat = 'empgfat',
  Empgmot = 'empgmot',
  Empgson = 'empgson',
  Empmlaw = 'empmlaw',
  Empmoth = 'empmoth',
  Empself = 'empself',
  Empsist = 'empsist',
  Emphusband = 'emphusband',
  Empson = 'empson',
  Empwife = 'empwife',
  Empudtr = 'empudtr',
  Empslaw = 'empslaw',
  Empdlaw = 'empdlaw',
  Empuncle = 'empuncle',
  Empaunty = 'empaunty',
  Empnephew = 'empnephew',
  Empniece = 'empniece',
  Depudtr = 'depudtr',
  Depson = 'depson',
  Sisl = 'sisl',
  Blaw = 'blaw',
}

enum CustomerType {
  Proposer = 'proposer',
  Insured = 'insured',
}

export class MaEnrolmentBeneficiaryDetailsDto {
  @IsString()
  POLNUM: string;

  @IsString()
  CUSTOMERID: string;

  @IsString()
  TITLE: string;

  @IsDateString()
  DATEOFBIRTH: string;

  @IsNumber()
  AGE: number;

  @IsString()
  FIRSTNAME: string;

  @IsOptional()
  @IsString()
  MIDDLENAME?: string;

  @IsString()
  LASTNAME: string;

  @IsEnum(Gender)
  GENDER: Gender;

  @IsEnum(Relation)
  RELATION: Relation;

  @IsOptional()
  @IsString()
  MRGSTAT?: string;

  @IsOptional()
  @IsNumber()
  ANNINCOMEINR?: number;

  @IsOptional()
  @IsNumber()
  HEIGHT?: number;

  @IsOptional()
  @IsNumber()
  WEIGHT?: number;

  @IsEnum(CustomerType)
  CUSTOMERTYPE: CustomerType;

  @IsOptional()
  @IsNumber()
  SUMINSINDIV?: number;

  @IsOptional()
  @IsBoolean()
  PROISINSURED?: boolean;

  @IsDateString()
  JOINDATE: string;

  @IsOptional()
  @IsDateString()
  MEMBERTERMINATIONDATE?: string;

  @IsOptional()
  @IsString()
  SMOKERCODE?: string;

  @IsOptional()
  @IsString()
  EDUCATION?: string;

  @IsOptional()
  @IsString()
  OCCUPCLASS?: string;

  @IsOptional()
  @IsNumber()
  ANNINCOMERS?: number;

  @IsOptional()
  @IsString()
  SSNTYPE?: string;

  @IsOptional()
  @IsString()
  SSN?: string;

  @IsOptional()
  @IsDateString()
  INCDATE?: string;

  @IsOptional()
  @IsBoolean()
  ISBLACKLIST?: boolean;

  @IsOptional()
  @IsString()
  BLKLISTREASON?: string;

  @IsOptional()
  @IsNumber()
  DEDUCTIBLE?: number;

  @IsOptional()
  @IsString()
  COVDAYSOPTED?: string;

  @IsOptional()
  @IsNumber()
  CURRENTPOLICYHMB_INSURED?: number;

  @IsOptional()
  @IsNumber()
  BALANCEHMBAMOUNT_INSURED?: number;

  @IsOptional()
  @IsNumber()
  HMBFROMREWARDPOINTS_INSURED?: number;

  @IsOptional()
  @IsNumber()
  TOTALHMBAMOUNT_INSURED?: number;

  @IsOptional()
  @IsNumber()
  TotalCumulativeBonusPercentagefromCB_CBB_INSURED?: number;

  @IsOptional()
  @IsNumber()
  CUMULATIVEBONUSAMOUNTFROMCB_CBB_INSURED?: number;

  @IsOptional()
  @IsString()
  OPTIONALINSUREDEXTRA1?: string;

  @IsOptional()
  @IsString()
  OPTIONALINSUREDEXTRA2?: string;

  @IsOptional()
  @IsString()
  OPTIONALINSUREDEXTRA3?: string;

  @IsOptional()
  @IsString()
  OPTIONALINSUREDEXTRA4?: string;

  @IsOptional()
  @IsString()
  OPTIONALINSUREDEXTRA5?: string;

  @IsOptional()
  @IsString()
  UWREMARKS?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MaCoverageDetailsDto)
  MACoverageDTODetails: MaCoverageDetailsDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MaPEDDetailsDto)
  MAPEDDTODetails?: MaPEDDetailsDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdditionalMedicalDetailsDTO)
  AdditionalMedicalDetailsDTO?: AdditionalMedicalDetailsDTO[];
}

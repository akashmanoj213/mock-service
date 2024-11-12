import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export class LoginFyntuneUserDto {
  @IsNotEmpty()
  @IsString()
  mobileNumber: string;

  @IsNotEmpty()
  @IsString()
  mobile_no: string;

  @IsNotEmpty()
  @IsString()
  otp_code: string;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  middle_name?: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email_id: string;

  @IsNotEmpty()
  @IsString()
  pincode: string;

  @IsNotEmpty()
  @IsString()
  organization_id: string;

  @IsNotEmpty()
  @IsString()
  organization_name: string;

  @IsNotEmpty()
  @IsString()
  category_id: string;
}

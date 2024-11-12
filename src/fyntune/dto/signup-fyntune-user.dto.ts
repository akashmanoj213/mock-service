import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export class SignupFyntuneUserDto {
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
  @IsString()
  mobile: string;

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
  category_id: string;

  @IsNotEmpty()
  @IsString()
  organization_name: string;
}

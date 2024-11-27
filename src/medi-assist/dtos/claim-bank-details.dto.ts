import { IsString } from 'class-validator';

export class ClaimBankDetailsDto {
  @IsString()
  accoutnHolderName: string;

  @IsString()
  ifsccode: string;

  @IsString()
  accountNumber: string;

  @IsString()
  branchAddress: string;
}

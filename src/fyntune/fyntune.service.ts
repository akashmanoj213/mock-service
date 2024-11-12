import { Injectable } from '@nestjs/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { LoginFyntuneUserDto } from './dto/login-fyntune-user.dto';
import * as https from 'https';
import { HttpService } from '@nestjs/axios';
import { SignupFyntuneUserDto } from './dto/signup-fyntune-user.dto';
import * as FormData from 'form-data';

@Injectable()
export class FyntuneService {
  constructor(private readonly httpService: HttpService) {}

  async signUpUser(signupUserDto: SignupFyntuneUserDto): Promise<any> {
    const url = 'https://fyntune-pos.posonboarding.com/api/auth/signupDet';
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
    };

    // Convert signupUserDto to form-data format
    const data = new FormData();
    for (const key in signupUserDto) {
      if (signupUserDto.hasOwnProperty(key)) {
        data.append(key, signupUserDto[key]);
      }
    }

    // data.append('mobile', '9972976960');
    // data.append('first_name', 'John');
    // data.append('last_name', 'Wick');
    // data.append('email_id', 'johnWick10@gmail.com');
    // data.append('pincode', '560037');
    // data.append('organization_id', '1');
    // data.append('organization_name', 'Prudential');
    // data.append('category_id', '3');
    // data.append('middle_name', '');

    headers = {
      ...data.getHeaders(),
      ...headers,
    };

    try {
      const response = await lastValueFrom(
        this.httpService.post(url, data, {
          headers,
          httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        }),
      );
      return response.data;
    } catch (error) {
      console.error('Error creating Fyntune user:', error.message);
      return error.response.data;
    }
  }

  async loginUser(loginUserDto: LoginFyntuneUserDto): Promise<any> {
    const url = 'https://fyntune-pos.posonboarding.com/api/auth/checkOtpSignup';

    const data = new FormData();
    for (const key in loginUserDto) {
      if (loginUserDto.hasOwnProperty(key)) {
        data.append(key, loginUserDto[key]);
      }
    }

    // data.append('mobile', '9972976960');
    // data.append('mobile_no', '9972976960');
    // data.append('otp_code', '1234');
    // data.append('first_name', 'John');
    // data.append('last_name', 'Wick');
    // data.append('email_id', 'johnWick10@gmail.com');
    // data.append('pincode', '560037');
    // data.append('organization_id', '1');
    // data.append('organization_name', 'Prudential');
    // data.append('category_id', '3');
    // data.append('middle_name', '');

    const headers = {
      ...data.getHeaders(),
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, data, {
          headers,
          httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        }),
      );
      return response.data;
    } catch (error) {
      console.error('Error loging in Fyntune user:', error.message);
      return error.response.data;
    }
  }
}

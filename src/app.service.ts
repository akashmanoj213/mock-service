import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleZscoreWebhook(body) {
    this.logger.log({ body });
    console.log(body);
  }

  async postClaims() {
    const url = 'http://20.106.184.11:8080/Zscore/postClaims';
    const headers = {
      authkey: 'kabclwegc24ewjg23hgcxjahkjbkdfx2',
      'Content-Type': 'application/json',
    };
    const body = {
      claims: [
        {
          claim_id: 'CL002',
          storageFolder: 'CL002',
          transaction_id: 'CLAIM10001',
          storageBucket: 'gcs-testbucketzscore',
        },
      ],
    };

    try {
      const { data } = await firstValueFrom(
        this.httpService.post(url, body, { headers }),
      );
      console.log('API call succesful');
      return data;
    } catch (error) {
      console.log(`Error making POST request to ${url}: ${error.message}`);
      throw error;
    }
  }
}

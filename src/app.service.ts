import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { FirestoreService } from './core/providers/firestore/firestore.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly firestoreService: FirestoreService,
  ) {}

  async handleZscoreWebhook(body) {
    const savedDocument = await this.firestoreService.createOrOverride(
      process.env.DOCUMENTS_COLLECTION,
      Math.random(),
      body,
    );

    console.log('Digitised document saved to firestore.');
    return savedDocument;
  }

  getHello(): string {
    return 'Hello World!';
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

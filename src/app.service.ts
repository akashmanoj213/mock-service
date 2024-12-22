import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { FirestoreService } from './core/providers/firestore/firestore.service';
import { randomUUID } from 'crypto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly firestoreService: FirestoreService,
  ) {}

  async handleZscoreWebhook(body) {
    const { transactionId } = body;
    const parsedTransactionId = transactionId
      ? transactionId.toString()
      : randomUUID().toString();

    const savedDocument = await this.firestoreService.createOrOverride(
      process.env.DOCUMENTS_COLLECTION,
      parsedTransactionId,
      body,
    );

    console.log('Digitised document saved to firestore.');
    return savedDocument;
  }

  getHello(): string {
    return 'Hello World!';
  }

  async postClaims(body: any) {
    const url = 'http://20.106.184.11:8080/Zscore/postClaims';
    const headers = {
      authkey: 'kabclwegc24ewjg23hgcxjahkjbkdfx2',
      'Content-Type': 'application/json',
    };

    try {
      const { data } = await firstValueFrom(
        this.httpService.post(url, body, { headers }),
      );
      console.log('API call succesfull');
      return data;
    } catch (error) {
      console.log(`Error making POST request to ${url}: ${error.message}`);
      throw error;
    }
  }

  async getDigitisedDocuments() {
    const documents = await this.firestoreService.findAll(
      process.env.DOCUMENTS_COLLECTION,
    );
    return documents;
  }

  async getDigitisedDocumentById(id: string) {
    const document = await this.firestoreService.findById(
      process.env.DOCUMENTS_COLLECTION,
      id,
    );
    return document;
  }
}

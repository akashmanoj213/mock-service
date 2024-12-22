import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import * as FormData from 'form-data';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { IassistResponseDto } from './dto/iassist-response.dto';
import { FirestoreService } from 'src/core/providers/firestore/firestore.service';
import {
  DigitisationStatus,
  DocumentEntity,
  DocumentType,
} from './entities/document.entity';
import { DigitisedDischargeSummaryDto } from './dto/digitised-discharge-summary.dto';
import { DigitisedLabReportDto } from './dto/digitised-lab-report.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class IassistService {
  IASSIST_BASE_URL: string;
  IASSIST_USERNAME: string;
  IASSIST_PASSWORD: string;
  IASSIST_API_KEY: string;
  DOCUMENTS_COLLECTION: string;
  IASSIST_WEBHOOK_COLLECTION: string;
  accessToken: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly firestoreService: FirestoreService,
  ) {
    if (
      !process.env.IASSIST_BASE_URL ||
      !process.env.IASSIST_USERNAME ||
      !process.env.IASSIST_PASSWORD ||
      !process.env.IASSIST_API_KEY ||
      !process.env.DOCUMENTS_COLLECTION ||
      !process.env.IASSIST_WEBHOOK_COLLECTION
    ) {
      throw new Error('IASSIST environment variables not set.');
    }

    this.IASSIST_BASE_URL = process.env.IASSIST_BASE_URL;
    this.IASSIST_USERNAME = process.env.IASSIST_USERNAME;
    this.IASSIST_PASSWORD = process.env.IASSIST_PASSWORD;
    this.IASSIST_API_KEY = process.env.IASSIST_API_KEY;
    this.DOCUMENTS_COLLECTION = process.env.DOCUMENTS_COLLECTION;
    this.IASSIST_WEBHOOK_COLLECTION = process.env.IASSIST_WEBHOOK_COLLECTION;
  }

  async getAccessToken() {
    const url = `${this.IASSIST_BASE_URL}/auth`;
    const data = {
      username: this.IASSIST_USERNAME,
      password: this.IASSIST_PASSWORD,
    };

    try {
      const response = await lastValueFrom(this.httpService.post(url, data));

      const { access_token: accessToken } = response.data;
      this.accessToken = accessToken;
      console.log('access-token', accessToken);
      return accessToken;
    } catch (error) {
      console.log('Error getting access token:', error.message);
      throw new InternalServerErrorException('Failed to get access token');
    }
  }

  async digitiseDocument(file: Express.Multer.File, trackingId: string) {
    const traceparentId = trackingId ?? randomUUID().toString();
    // update digitisation status to INITIATED
    const document: DocumentEntity = {
      digitisationStatus: DigitisationStatus.INITIATED,
      fileName: file.originalname,
      traceparentId,
    };

    // Write document to db
    try {
      const doc = await this.firestoreService.findById(
        this.DOCUMENTS_COLLECTION,
        traceparentId,
      );
      if (!doc.exists) {
        await this.firestoreService.createOrOverride(
          this.DOCUMENTS_COLLECTION,
          traceparentId,
          document,
        );
      }
    } catch (error) {
      throw new InternalServerErrorException('Document already exists');
    }

    await this.getAccessToken();
    const url = `${this.IASSIST_BASE_URL}/process_document/async`;

    const formData = new FormData();
    formData.append('document', file.buffer, file.originalname);
    formData.append('api_key', this.IASSIST_API_KEY);
    formData.append('identifier', 'HC');

    const headers = {
      Authorization: `JWT ${this.accessToken}`,
      Traceparent: traceparentId,
      ...formData.getHeaders(),
    };

    try {
      console.log(
        'Initiating digitization of document, trackingId:',
        traceparentId,
      );
      const response = await lastValueFrom(
        this.httpService.post(url, formData, { headers }),
      );

      // Validate and transform the response
      const iassistResponse = plainToClass(IassistResponseDto, response.data);
      const validationErrors = await validate(iassistResponse);

      if (validationErrors.length > 0) {
        // Handle the validation error appropriately
        const errorMessage = `Invalid response structure from Iassist: ${validationErrors
          .map((error) => error.toString())
          .join(', ')}`;
        throw new BadRequestException(errorMessage);
      }

      const {
        data: {
          result: { message, ref_id, status_code },
        },
      } = iassistResponse;

      console.log('Document digitization initiated, ref_id:', ref_id);
      // update digitisation status to IN_PROGRESS
      document.digitisationStatus = DigitisationStatus.IN_PROGRESS;
      document.referenceId = ref_id;
      document.responseMessage = message;
      document.responseStatus = status_code;
      document.response = iassistResponse;

      await this.firestoreService.update(
        this.DOCUMENTS_COLLECTION,
        traceparentId,
        document,
      );

      return iassistResponse; // Return validated DTO
    } catch (error) {
      console.log('Error initiating digitization of document:', error.message);

      // update digitisation status to FAILED
      document.digitisationStatus = DigitisationStatus.FAILED;
      document.errorMessage = error.message;
      document.responseStatus = 500; // simplified error handling
      await this.firestoreService.update(
        this.DOCUMENTS_COLLECTION,
        traceparentId,
        document,
      );

      throw new InternalServerErrorException(
        'Failed to initiate digitization of document',
      );
    }
  }

  async getDigitisationStatus(trackingId: string) {
    const traceparentId = trackingId;
    const document = await this.firestoreService.findById(
      this.DOCUMENTS_COLLECTION,
      traceparentId,
    );

    if (!document.exists) {
      throw new InternalServerErrorException(
        `Document with tracking ID: ${traceparentId} not found`,
      );
    }

    return document.data;
  }

  // async digitiseDischargeSummary(
  //   file: Express.Multer.File,
  //   trackingId: number,
  // ) {
  //   // update digitisation status to INITIATED
  //   const document: DocumentEntity = {
  //     digitisationStatus: DigitisationStatus.INITIATED,
  //     documentType: DocumentType.DISCHARGE_SUMMARY,
  //     trackingId,
  //   };

  //   // Write document to db
  //   try {
  //     const doc = await this.firestoreService.findById(
  //       this.DOCUMENTS_COLLECTION,
  //       trackingId,
  //     );
  //     if (!doc.exists) {
  //       await this.firestoreService.createOrOverride(
  //         this.DOCUMENTS_COLLECTION,
  //         trackingId,
  //         document,
  //       );
  //     }
  //   } catch (error) {
  //     throw new InternalServerErrorException('Document already exists');
  //   }

  //   await this.getAccessToken();
  //   const url = `${this.IASSIST_BASE_URL}/discharge_summary/async`;

  //   const formData = new FormData();
  //   formData.append('file', file.buffer, file.originalname);
  //   formData.append('api_key', this.IASSIST_API_KEY);
  //   formData.append('tracking_id', trackingId.toString());

  //   const headers = {
  //     Authorization: `JWT ${this.accessToken}`,
  //     ...formData.getHeaders(),
  //   };

  //   try {
  //     const response = await lastValueFrom(
  //       this.httpService.post(url, formData, { headers }),
  //     );

  //     // Validate and transform the response
  //     const iassistResponse = plainToClass(IassistResponseDto, response.data);
  //     const validationErrors = await validate(iassistResponse);

  //     if (validationErrors.length > 0) {
  //       // Handle the validation error appropriately
  //       const errorMessage = `Invalid response structure from Iassist: ${validationErrors
  //         .map((error) => error.toString())
  //         .join(', ')}`;
  //       throw new BadRequestException(errorMessage);
  //     }

  //     // update digitisation status to IN_PROGRESS
  //     document.digitisationStatus = DigitisationStatus.IN_PROGRESS;
  //     document.referenceId = iassistResponse.ref_id;
  //     document.taskId = iassistResponse.task_id;
  //     document.responseMessage = iassistResponse.message;
  //     document.responseStatus = iassistResponse.status;

  //     await this.firestoreService.update(
  //       this.DOCUMENTS_COLLECTION,
  //       trackingId,
  //       document,
  //     );

  //     return iassistResponse; // Return validated DTO
  //   } catch (error) {
  //     console.log(
  //       'Error initiating digitization of discharge summary:',
  //       error.message,
  //     );

  //     // update digitisation status to FAILED
  //     document.digitisationStatus = DigitisationStatus.FAILED;
  //     document.responseMessage = error.message;
  //     document.responseStatus = '500';
  //     await this.firestoreService.update(
  //       this.DOCUMENTS_COLLECTION,
  //       trackingId,
  //       document,
  //     );

  //     throw new InternalServerErrorException(
  //       'Failed to initiate digitization of discharge summary',
  //     );
  //   }
  // }

  // async digitiseLabReport(file: Express.Multer.File, trackingId: number) {
  //   // update digitisation status to INITIATED
  //   const document: DocumentEntity = {
  //     digitisationStatus: DigitisationStatus.INITIATED,
  //     documentType: DocumentType.LAB_REPORT,
  //     trackingId,
  //   };

  //   // Write document to db
  //   try {
  //     const doc = await this.firestoreService.findById(
  //       this.DOCUMENTS_COLLECTION,
  //       trackingId,
  //     );
  //     if (!doc.exists) {
  //       await this.firestoreService.createOrOverride(
  //         this.DOCUMENTS_COLLECTION,
  //         trackingId,
  //         document,
  //       );
  //     }
  //   } catch (error) {
  //     throw new InternalServerErrorException('Document already exists');
  //   }

  //   await this.getAccessToken();
  //   const url = `${this.IASSIST_BASE_URL}/complete_lab_report/async`;

  //   const formData = new FormData();
  //   formData.append('file', file.buffer, file.originalname);
  //   formData.append('api_key', this.IASSIST_API_KEY);
  //   formData.append('tracking_id', trackingId.toString());

  //   const headers = {
  //     Authorization: `JWT ${this.accessToken}`,
  //     ...formData.getHeaders(),
  //   };

  //   try {
  //     const response = await lastValueFrom(
  //       this.httpService.post(url, formData, { headers }),
  //     );

  //     // Validate and transform the response
  //     const iassistResponse = plainToClass(IassistResponseDto, response.data);
  //     const validationErrors = await validate(iassistResponse);

  //     if (validationErrors.length > 0) {
  //       // Handle the validation error appropriately
  //       const errorMessage = `Invalid response structure from Iassist: ${validationErrors
  //         .map((error) => error.toString())
  //         .join(', ')}`;
  //       throw new BadRequestException(errorMessage);
  //     }

  //     //update digitisation status to IN_PROGRESS
  //     document.digitisationStatus = DigitisationStatus.IN_PROGRESS;
  //     document.referenceId = iassistResponse.ref_id;
  //     document.taskId = iassistResponse.task_id;
  //     document.responseMessage = iassistResponse.message;
  //     document.responseStatus = iassistResponse.status;

  //     await this.firestoreService.update(
  //       this.DOCUMENTS_COLLECTION,
  //       trackingId,
  //       document,
  //     );
  //     return iassistResponse; // Return validated DTO
  //   } catch (error) {
  //     console.log(
  //       'Error initiating digitization of lab report:',
  //       error.message,
  //     );

  //     // update digitisation status to FAILED
  //     document.digitisationStatus = DigitisationStatus.FAILED;
  //     document.responseMessage = error.message;
  //     document.responseStatus = '500';
  //     await this.firestoreService.update(
  //       this.DOCUMENTS_COLLECTION,
  //       trackingId,
  //       document,
  //     );

  //     throw new InternalServerErrorException(
  //       'Failed to initiate digitization of lab report',
  //     );
  //   }
  // }

  // async getDigitisationStatus(trackingId: string) {
  //   const traceparentId = trackingId;
  //   const document = await this.firestoreService.findById(
  //     this.DOCUMENTS_COLLECTION,
  //     traceparentId,
  //   );

  //   if (!document.exists) {
  //     throw new InternalServerErrorException(
  //       `Document with tracking ID: ${traceparentId} not found`,
  //     );
  //   }

  //   const documentData: DocumentEntity = document.data;

  //   const { taskId, documentType, digitisationStatus } = documentData;

  //   if (digitisationStatus !== DigitisationStatus.IN_PROGRESS) {
  //     throw new InternalServerErrorException(
  //       `Digitisation for document with tracking ID: ${trackingId} is not in progress ! Current status: ${digitisationStatus}`,
  //     );
  //   }

  //   await this.getAccessToken();
  //   const url = `${this.IASSIST_BASE_URL}/get_result`;

  //   const formData = new FormData();
  //   formData.append('task_id', taskId);

  //   const headers = {
  //     Authorization: `JWT ${this.accessToken}`,
  //     ...formData.getHeaders(),
  //   };

  //   try {
  //     const response = await lastValueFrom(
  //       this.httpService.post(url, formData, { headers }),
  //     );

  //     if (response.status === 401) {
  //       throw new BadRequestException(response.data); // Throw BadRequestException for 401
  //     }

  //     let iassistResponse;
  //     if (documentType === DocumentType.DISCHARGE_SUMMARY) {
  //       // Validate and transform the response
  //       iassistResponse = plainToClass(
  //         DigitisedDischargeSummaryDto,
  //         response.data,
  //       );
  //       const validationErrors = await validate(iassistResponse);

  //       if (validationErrors.length > 0) {
  //         // Handle the validation error appropriately
  //         const errorMessage = `Invalid response structure from Iassist: ${validationErrors
  //           .map((error) => error.toString())
  //           .join(', ')}`;
  //         throw new BadRequestException(errorMessage);
  //       }
  //     } else if (documentType === DocumentType.LAB_REPORT) {
  //       // Validate and transform the response
  //       iassistResponse = plainToClass(DigitisedLabReportDto, response.data);
  //       const validationErrors = await validate(iassistResponse);

  //       if (validationErrors.length > 0) {
  //         // Handle the validation error appropriately
  //         const errorMessage = `Invalid response structure from Iassist: ${validationErrors
  //           .map((error) => error.toString())
  //           .join(', ')}`;
  //         throw new BadRequestException(errorMessage);
  //       }
  //     }

  //     documentData.digitisationStatus = DigitisationStatus.COMPLETED;
  //     documentData.responseMessage = iassistResponse;
  //     documentData.responseStatus = response.data.status;

  //     await this.firestoreService.update(
  //       this.DOCUMENTS_COLLECTION,
  //       trackingId,
  //       documentData,
  //     );

  //     return iassistResponse;
  //   } catch (error) {
  //     if (error instanceof BadRequestException) {
  //       // Check for the specific error type
  //       throw error; // Rethrow the error
  //     }
  //     throw new InternalServerErrorException(
  //       'Failed to get digitisation status',
  //     );
  //   }
  // }

  async handleDigitisationWebhook(requestBody: any) {
    try {
      const savedData = await this.firestoreService.create(
        this.IASSIST_WEBHOOK_COLLECTION, // New collection name
        requestBody,
      );
      console.log('Iassist webhook response saved:', savedData);
      return savedData;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to save Iassist webhook response to db',
      );
    }
  }
}

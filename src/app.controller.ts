import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Post('webhooks/zscore')
  handleZscoreWebhook(@Body() requestBody: any) {
    try {
      this.logger.log('Zscore webhook invoked.');
      this.appService.handleZscoreWebhook(requestBody);
      return {
        status: 'success',
      };
    } catch (error) {
      this.logger.error(error.message ? error.message : error);
      throw new InternalServerErrorException({
        status: 'fail',
        message: error.message ? error.message : error,
      });
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('post-claims')
  async postClaims() {
    const response = await this.appService.postClaims();
    return response; // Return the response data
  }
}

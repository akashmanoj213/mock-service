import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
  UploadedFile,
  UseInterceptors,
  Get,
  Param,
  Logger,
} from '@nestjs/common';
import { IassistService } from './iassist.service';
import { FileDigitisationDto } from './dto/file-digitisation.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('iassist')
export class IassistController {
  private readonly logger = new Logger(IassistController.name);
  constructor(private readonly iassistService: IassistService) {}

  // @Post('discharge-summary')
  // @UseInterceptors(FileInterceptor('file'))
  // async digitiseDischargeSummary(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() body: FileDigitisationDto,
  // ) {
  //   try {
  //     const result = await this.iassistService.digitiseDischargeSummary(
  //       file,
  //       body.trackingId,
  //     );
  //     return result;
  //   } catch (error) {
  //     throw new InternalServerErrorException(
  //       'Failed to initiate digitization of discharge summary',
  //     );
  //   }
  // }

  @Post('initiate-digitisation')
  @UseInterceptors(FileInterceptor('file'))
  async initiateDigitisation(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: FileDigitisationDto, // Reusing the existing DTO
  ) {
    try {
      const result = await this.iassistService.digitiseDocument(
        file,
        body.trackingId,
      );
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to initiate document digitisation',
      );
    }
  }

  @Get('digitisation-status/:trackingId') // Define the route with a parameter
  async getDigitisationStatus(@Param('trackingId') trackingId: string) {
    try {
      const result = await this.iassistService.getDigitisationStatus(
        trackingId,
      );
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to get digitisation status',
      );
    }
  }

  //Webhook which will be used to post the digitisationStatus after digitisation.
  @Post('webhook')
  async digitisationWebhookHandler(@Body() requestBody: any) {
    try {
      this.logger.log('IAssist webhook invoked.');
      await this.iassistService.handleDigitisationWebhook(requestBody);

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
}

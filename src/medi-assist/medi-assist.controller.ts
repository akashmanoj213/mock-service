import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  InternalServerErrorException,
} from '@nestjs/common';
import { MediAssistService } from './medi-assist.service';
import { FetchAllClaimDetailsDto } from './dtos/fetch-all-claim-details.dto';
import { ClaimCreateRequestDto } from './dtos/claim-create-request.dto';
import { ClaimCreateResponseDto } from './dtos/claim-create-response.dto';
import { FetchActiveClaimsResponseDto } from './dtos/fetch-active-claims-response.dto';
import { FetchClaimsReqDto } from './dtos/fetch-claims-req.dto';
import { FetchClaimsResDto } from './dtos/fetch-claims-res.dto';
import { ClaimBillAdditionRequestDto } from './dtos/claim-bill-addition-request.dto';
import { ClaimAttachmentsAdditionDto } from './dtos/claim-attachments-addition.dto';
import { MAEnrolmentRequestDTO } from './dtos/ma-enrolment-request.dto';
import { PubSubService } from 'src/core/providers/pub-sub/pub-sub.service';

@Controller('medi-assist')
export class MediAssistController {
  constructor(
    private readonly mediAssistService: MediAssistService,
    private readonly pubSubService: PubSubService,
  ) {}

  @Post('claim/claim-status')
  async getClaimStatus(
    @Body() fetchAllClaimDetailsDto: FetchAllClaimDetailsDto,
  ) {
    return this.mediAssistService.getClaimStatus(fetchAllClaimDetailsDto);
  }

  @Get('claim/active-claims')
  async getActiveClaims(
    @Headers('accessToken') accessToken: string,
  ): Promise<FetchActiveClaimsResponseDto> {
    return this.mediAssistService.getActiveClaims(accessToken);
  }

  @Post('claim/submit-claim')
  async submitClaim(
    @Body() claimCreateRequestDto: ClaimCreateRequestDto,
  ): Promise<ClaimCreateResponseDto> {
    return this.mediAssistService.submitClaim(claimCreateRequestDto);
  }

  @Post('claim/fetch-claim-details')
  async fetchClaimDetails(
    @Body() fetchClaimsReqDto: FetchClaimsReqDto,
  ): Promise<FetchClaimsResDto> {
    return this.mediAssistService.fetchClaimDetails(fetchClaimsReqDto);
  }

  @Post('claim/addBills')
  async updateClaimBills(
    @Body() claimBillAdditionRequest: ClaimBillAdditionRequestDto,
  ): Promise<ClaimCreateResponseDto> {
    return this.mediAssistService.updateClaimBills(claimBillAdditionRequest);
  }

  @Post('claim/addAttachments')
  async updateAttachments(
    @Body() claimAttachmentsAdditionDTO: ClaimAttachmentsAdditionDto,
  ) {
    return this.mediAssistService.updateAttachments(
      claimAttachmentsAdditionDTO,
    );
  }

  @Post('claim/enrolment')
  async enrolment(@Body() mAEnrolmentRequestDTO: MAEnrolmentRequestDTO) {
    return this.mediAssistService.enrolment(mAEnrolmentRequestDTO);
  }

  @Get('policy')
  async getAllPolicies() {
    return this.mediAssistService.getAllPolicies();
  }

  @Post('policy/enrolment')
  async policyEnrolment(@Body() body: any) {
    return this.mediAssistService.policyEnrolment(body);
  }

  @Post('policy-generated-handler')
  async policyGeneratedHandler(@Body() pubSubMessage: PubSubMessageDto) {
    console.log('Medi Assist Policy enrollment hanlder invoked...');
    try {
      const body = this.pubSubService.formatMessageToPlainData(pubSubMessage);

      return this.mediAssistService.policyEnrolment(body);
    } catch (error) {
      console.log(
        `Error occured while enrolling policy in Medi Assist TPA ! Error: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Error occured while enrolling policy in Medi Assist TPA',
        {
          cause: error,
          description: error.message,
        },
      );
    }
  }

  @Get('if-address')
  async getIfAddpress() {
    return this.mediAssistService.getIfAddress();
  }
}

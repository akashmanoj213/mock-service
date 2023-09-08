import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  InternalServerErrorException,
} from '@nestjs/common';
import { PasService } from './pas.service';
import { PubSubService } from 'src/core/providers/pub-sub/pub-sub.service';
import { PubSubMessageDto } from 'src/core/dto/pub-sub-message.dto';
import { PasClaimSyncDto } from './dto/pas-claim-sync.dto';
import { PasClaimSettlementSyncDto } from './dto/pas-claim-settlement-sync.dto';

@Controller('pas')
export class PasController {
  constructor(
    private readonly pasService: PasService,
    private pubSubService: PubSubService,
  ) {}

  @Post('pas-claim-sync-handler')
  async pasClaimSyncHandler(@Body() pubSubMessage: PubSubMessageDto) {
    console.log('-------------------  -------------------');
    console.log('PAS claim sync hanlder invoked.');
    try {
      const { claimId } = this.pubSubService.formatMessageData<PasClaimSyncDto>(
        pubSubMessage,
        PasClaimSyncDto,
      );

      const claim = await this.pasService.getClaimDetails(claimId);

      await this.pasService.syncClaimDetails(claim);
    } catch (error) {
      console.log(
        `Error occured while syncing claim details to PAS ! Error: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Error occured while syncing claim details to PAS !',
        {
          cause: error,
          description: error.message,
        },
      );
    }
  }

  @Post('pas-claim-adj-sync-handler')
  async pasClaimAdjSyncHandler(@Body() pubSubMessage: PubSubMessageDto) {
    console.log('-------------------  -------------------');
    console.log('PAS claim adj sync hanlder invoked.');
    try {
      const { claimId } = this.pubSubService.formatMessageData<PasClaimSyncDto>(
        pubSubMessage,
        PasClaimSyncDto,
      );

      const adjudicationItems = await this.pasService.getAdjudicationItems(
        claimId,
      );

      await this.pasService.syncClaimAdjudicationItemDetails(
        claimId,
        adjudicationItems,
      );
    } catch (error) {
      console.log(
        `Error occured while syncing claim adjudication item details to PAS ! Error: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Error occured while syncing claim adjudication item details to PAS !',
        {
          cause: error,
          description: error.message,
        },
      );
    }
  }

  @Post('pas-claim-settlement-sync-handler')
  async pasClaimSettlementSyncHandler(@Body() pubSubMessage: PubSubMessageDto) {
    console.log('-------------------  -------------------');
    console.log('PAS claim settlement sync hanlder invoked.');
    try {
      const { claimSettlementId } =
        this.pubSubService.formatMessageData<PasClaimSettlementSyncDto>(
          pubSubMessage,
          PasClaimSettlementSyncDto,
        );

      const claimSettlementDetails =
        await this.pasService.getClaimSettlementDetails(claimSettlementId);

      await this.pasService.syncClaimSettlementDetails(claimSettlementDetails);
    } catch (error) {
      console.log(
        `Error occured while syncing claim settlement details to PAS ! Error: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Error occured while syncing claim settlement details to PAS !',
        {
          cause: error,
          description: error.message,
        },
      );
    }
  }

  @Get()
  findAll() {
    return this.pasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pasService.remove(+id);
  }
}

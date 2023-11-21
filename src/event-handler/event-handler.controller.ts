import {
  Controller,
  Post,
  Body,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { EventHandlerService } from './event-handler.service';
import { EventStoreEventDto } from 'src/core/dto/event-store-event.dto';
import { PubSubMessageDto } from 'src/core/dto/pub-sub-message.dto';
import { PubSubService } from 'src/core/providers/pub-sub/pub-sub.service';

@Controller('event-handler')
export class EventHandlerController {
  private readonly logger = new Logger(EventHandlerController.name);

  constructor(
    private readonly eventHandlerService: EventHandlerService,
    private readonly pubSubService: PubSubService,
  ) {}

  @Post()
  async create(@Body() pubSubMessage: PubSubMessageDto) {
    this.logger.log('-------------------  -------------------');
    this.logger.log('Event-store event handler invoked.');

    try {
      const eventStoreEventDto =
        this.pubSubService.formatMessageData<EventStoreEventDto>(
          pubSubMessage,
          EventStoreEventDto,
        );

      const { type, data } = eventStoreEventDto;
      const result = await this.eventHandlerService.handleEvents(type, data);
      this.logger.log('Event handled succesfully!');
      return result;
    } catch (error) {
      this.logger.log(
        `Error occured while handling event-store event ! Error: ${error.message}`,
      );
      throw new InternalServerErrorException(
        'Error occured while handling event-store event !',
        {
          cause: error,
          description: error.message,
        },
      );
    }
  }
}

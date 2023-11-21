import { Injectable, Logger } from '@nestjs/common';
import { EventTypes } from 'src/core/dto/event-store-event.dto';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class EventHandlerService {
  private readonly logger = new Logger(EventHandlerService.name);

  constructor(private readonly httpService: HttpService) {}

  async handleEvents(type: EventTypes, eventBody: object) {
    switch (type) {
      case EventTypes.CREATE_CLAIM: {
        const { data } = await firstValueFrom(
          this.httpService.post(
            `${process.env.CLAIM_SERVICE_BASE_URL}/claims/create-claim-event-handler`,
            eventBody,
          ),
        );

        return data;
      }

      default:
        this.logger.log('Event type did not match any case...');
        break;
    }
  }
}

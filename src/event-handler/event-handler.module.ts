import { Module } from '@nestjs/common';
import { EventHandlerService } from './event-handler.service';
import { EventHandlerController } from './event-handler.controller';
import { HttpModule } from '@nestjs/axios';
import { PubSubModule } from 'src/core/providers/pub-sub/pub-sub.module';

@Module({
  imports: [PubSubModule, HttpModule],
  controllers: [EventHandlerController],
  providers: [EventHandlerService],
})
export class EventHandlerModule {}

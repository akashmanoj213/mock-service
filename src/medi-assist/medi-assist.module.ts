import { Module } from '@nestjs/common';
import { MediAssistService } from './medi-assist.service';
import { MediAssistController } from './medi-assist.controller';
import { HttpModule } from '@nestjs/axios';
import { PubSubModule } from 'src/core/providers/pub-sub/pub-sub.module';

@Module({
  imports: [HttpModule, PubSubModule],
  controllers: [MediAssistController],
  providers: [MediAssistService],
})
export class MediAssistModule {}

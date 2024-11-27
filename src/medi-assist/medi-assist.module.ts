import { Module } from '@nestjs/common';
import { MediAssistService } from './medi-assist.service';
import { MediAssistController } from './medi-assist.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [MediAssistController],
  providers: [MediAssistService],
})
export class MediAssistModule {}

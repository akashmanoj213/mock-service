import { Module } from '@nestjs/common';
import { FyntuneService } from './fyntune.service';
import { FyntuneController } from './fyntune.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [FyntuneController],
  providers: [FyntuneService],
  imports: [HttpModule],
})
export class FyntuneModule {}

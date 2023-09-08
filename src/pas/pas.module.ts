import { Module } from '@nestjs/common';
import { PasService } from './pas.service';
import { PasController } from './pas.controller';
import { PubSubModule } from 'src/core/providers/pub-sub/pub-sub.module';
import { HttpModule } from '@nestjs/axios';
import { FirestoreModule } from 'src/core/providers/firestore/firestore.module';

@Module({
  imports: [PubSubModule, HttpModule, FirestoreModule],
  controllers: [PasController],
  providers: [PasService],
})
export class PasModule {}

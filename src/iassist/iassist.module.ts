import { Module } from '@nestjs/common';
import { IassistService } from './iassist.service';
import { IassistController } from './iassist.controller';
import { HttpModule } from '@nestjs/axios';
import { FirestoreModule } from 'src/core/providers/firestore/firestore.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    HttpModule,
    FirestoreModule,
    LoggerModule.forRoot({
      pinoHttp: {
        autoLogging: false,
        wrapSerializers: true,
      },
    }),
  ],
  controllers: [IassistController],
  providers: [IassistService],
})
export class IassistModule {}

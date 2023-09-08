import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PolicyModule } from './policy/policy.module';
import { HospitalModule } from './hospital/hospital.module';
import { PaymentModule } from './payment/payment.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasModule } from './pas/pas.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'Mocks',
      synchronize: true,
      autoLoadEntities: true,
    }),
    PolicyModule,
    HospitalModule,
    PaymentModule,
    PasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

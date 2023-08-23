import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PolicyModule } from './policy/policy.module';
import { HospitalModule } from './hospital/hospital.module';

@Module({
  imports: [
    PolicyModule,
    HospitalModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   // host: '/cloudsql/pruinhlth-nprd-dev-scxlyx-7250:asia-south1:sahi-dev',
    //   host: 'localhost',
    //   port: 5432,
    //   // username: 'sahi-user',
    //   // password: 'qwerty',
    //   username: 'postgres',
    //   password: 'qwerty',
    //   database: 'Mocks',
    //   synchronize: true,
    //   autoLoadEntities: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

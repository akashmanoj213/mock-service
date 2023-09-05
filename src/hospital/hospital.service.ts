import { Injectable } from '@nestjs/common';
import { Hospital } from './entities/hospital.entity';

@Injectable()
export class HospitalService {
  private readonly hospitals: Hospital[] = [
    {
      id: 7001,
      hospitalName: 'Appolo Multi Speciality',
      hospitalLocation: 'Bangalore',
      hospitalEmailId: 'appolo-bangalore@gmail.com',
      rohiniId: 12876,
      hospitalPincode: '560037',
      bankAccountNumber: '167489563905',
      bankIfscCode: 'NEFT007',
      bankAccountName: 'Apollo',
    },
    {
      id: 7002,
      hospitalName: 'Fortis Hospital',
      hospitalLocation: 'Bangalore',
      hospitalEmailId: 'fortisbangalore@gmail.com',
      rohiniId: 12872,
      hospitalPincode: '560093',
      bankAccountNumber: '864735890134',
      bankIfscCode: 'ICIC023',
      bankAccountName: 'Fortis',
    },
    {
      id: 7003,
      hospitalName: 'Narayana Hrudyalaya',
      hospitalLocation: 'Bangalore',
      hospitalEmailId: 'narayanahru@gmail.com',
      rohiniId: 12863,
      hospitalPincode: '560045',
      bankAccountNumber: '109845899347',
      bankIfscCode: 'NAR2314',
      bankAccountName: 'Narayana',
    },
  ];

  findAll() {
    return this.hospitals;
  }

  findOne(id: number) {
    return this.hospitals.find((hospital) => hospital.id === id);
  }
}

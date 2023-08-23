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
    },
    {
      id: 7002,
      hospitalName: 'Fortis Hospital',
      hospitalLocation: 'Bangalore',
      hospitalEmailId: 'fortisbangalore@gmail.com',
      rohiniId: 12872,
      hospitalPincode: '560093',
    },
    {
      id: 7003,
      hospitalName: 'Narayana Hrudyalaya',
      hospitalLocation: 'Bangalore',
      hospitalEmailId: 'narayanahru@gmail.com',
      rohiniId: 12863,
      hospitalPincode: '560045',
    },
  ];

  findAll() {
    return this.hospitals;
  }

  findOne(id: number) {
    return this.hospitals.find((hospital) => hospital.id === id);
  }
}

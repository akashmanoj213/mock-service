import { Controller, Get, Param } from '@nestjs/common';
import { HospitalService } from './hospital.service';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get()
  findAll() {
    return this.hospitalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalService.findOne(+id);
  }
}

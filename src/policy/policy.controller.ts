import { Controller, Get, Param } from '@nestjs/common';
import { PolicyService } from './policy.service';

@Controller('policy')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Get()
  findAll() {
    return this.policyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.policyService.findOne(+id);
  }
}

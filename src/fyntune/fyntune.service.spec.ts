import { Test, TestingModule } from '@nestjs/testing';
import { FyntuneService } from './fyntune.service';

describe('FyntuneService', () => {
  let service: FyntuneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FyntuneService],
    }).compile();

    service = module.get<FyntuneService>(FyntuneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

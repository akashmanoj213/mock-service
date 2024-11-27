import { Test, TestingModule } from '@nestjs/testing';
import { MediAssistService } from './medi-assist.service';

describe('MediAssistService', () => {
  let service: MediAssistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediAssistService],
    }).compile();

    service = module.get<MediAssistService>(MediAssistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

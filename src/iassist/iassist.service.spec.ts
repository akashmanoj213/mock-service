import { Test, TestingModule } from '@nestjs/testing';
import { IassistService } from './iassist.service';

describe('IassistService', () => {
  let service: IassistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IassistService],
    }).compile();

    service = module.get<IassistService>(IassistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

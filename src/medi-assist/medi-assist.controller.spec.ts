import { Test, TestingModule } from '@nestjs/testing';
import { MediAssistController } from './medi-assist.controller';
import { MediAssistService } from './medi-assist.service';

describe('MediAssistController', () => {
  let controller: MediAssistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediAssistController],
      providers: [MediAssistService],
    }).compile();

    controller = module.get<MediAssistController>(MediAssistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

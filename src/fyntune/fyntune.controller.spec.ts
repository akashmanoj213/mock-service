import { Test, TestingModule } from '@nestjs/testing';
import { FyntuneController } from './fyntune.controller';
import { FyntuneService } from './fyntune.service';

describe('FyntuneController', () => {
  let controller: FyntuneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FyntuneController],
      providers: [FyntuneService],
    }).compile();

    controller = module.get<FyntuneController>(FyntuneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

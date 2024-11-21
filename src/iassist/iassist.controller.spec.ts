import { Test, TestingModule } from '@nestjs/testing';
import { IassistController } from './iassist.controller';
import { IassistService } from './iassist.service';

describe('IassistController', () => {
  let controller: IassistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IassistController],
      providers: [IassistService],
    }).compile();

    controller = module.get<IassistController>(IassistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

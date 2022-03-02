import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammerController } from './programmer.controller';
import { ProgrammerService } from './programmer.service';

describe('ProgrammerController', () => {
  let controller: ProgrammerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgrammerController],
      providers: [ProgrammerService],
    }).compile();

    controller = module.get<ProgrammerController>(ProgrammerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

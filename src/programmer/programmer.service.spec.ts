import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammerService } from './programmer.service';

describe('ProgrammerService', () => {
  let service: ProgrammerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgrammerService],
    }).compile();

    service = module.get<ProgrammerService>(ProgrammerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

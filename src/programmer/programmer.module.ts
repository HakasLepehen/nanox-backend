import { Module } from '@nestjs/common';
import { ProgrammerService } from './programmer.service';
import { ProgrammerController } from './programmer.controller';

@Module({
  controllers: [ProgrammerController],
  providers: [ProgrammerService]
})
export class ProgrammerModule {}

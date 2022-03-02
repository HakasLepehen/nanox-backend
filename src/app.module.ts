import { Module } from '@nestjs/common';
import { ProgrammerModule } from './programmer/programmer.module';
import { ProgrammerController } from './programmer/programmer.controller';
import { ProgrammerService } from './programmer/programmer.service';

@Module({
  imports: [ProgrammerModule],
  controllers: [ProgrammerController],
  providers: [ProgrammerService],
})
export class AppModule {}

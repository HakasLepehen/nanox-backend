import { Module } from '@nestjs/common';
import { ProgrammerService } from './programmer.service';
import { ProgrammerController } from './programmer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programmer } from './entities/programmer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Programmer])],
  controllers: [ProgrammerController],
  providers: [ProgrammerService],
})
export class ProgrammerModule {}

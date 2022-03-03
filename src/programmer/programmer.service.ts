import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProgrammerDto } from './dto/create-programmer.dto';
import { UpdateProgrammerDto } from './dto/update-programmer.dto';
import { Programmer } from './entities/programmer.entity';

@Injectable()
export class ProgrammerService {
  constructor(
    @InjectRepository(Programmer)
    private programmerRepository: Repository<Programmer>,
  ) {}

  // create(
  //   @Body() createProgrammerDto: CreateProgrammerDto,
  // ): Promise<CreateProgrammerDto> {
  //   return this.programmerRepository.create(createProgrammerDto);
  // }

  findAll(): Promise<Programmer[]> {
    return this.programmerRepository.find();
  }

  findOne(id: number) {
    return this.programmerRepository.findOne(id);
  }

  // update(id: number, updateProgrammerDto: UpdateProgrammerDto) {
  //   return `This action updates a #${id} programmer`;
  // }

  async remove(id: number): Promise<void> {
    await this.programmerRepository.delete(id);
  }
}

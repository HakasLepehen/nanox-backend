import { BadRequestException, Body, Injectable } from '@nestjs/common';
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

  async create(
    @Body() createProgrammerDto: CreateProgrammerDto,
  ): Promise<CreateProgrammerDto> {
    try {
      const newProgrammer = await this.programmerRepository.create(
        createProgrammerDto,
      );

      await this.programmerRepository.save(newProgrammer);

      return newProgrammer;
    } catch (e) {
      throw new BadRequestException('asdasd', 'asdasda');
    }
  }

  findAll(): Promise<Programmer[]> {
    return this.programmerRepository.find();
  }

  findOne(id: number) {
    return this.programmerRepository.findOne(id);
  }

  async update(updateProgrammerDto: UpdateProgrammerDto) {
    await this.programmerRepository.update(
      updateProgrammerDto.id,
      updateProgrammerDto,
    );

    const updatedProgrammer = await this.programmerRepository.findOne(
      updateProgrammerDto.id,
    );

    if (updatedProgrammer) {
      return updatedProgrammer;
    }
  }

  async remove(id: number): Promise<void> {
    await this.programmerRepository.delete(id);
  }
}

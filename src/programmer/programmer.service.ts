import { Injectable } from '@nestjs/common';
import { CreateProgrammerDto } from './dto/create-programmer.dto';
import { UpdateProgrammerDto } from './dto/update-programmer.dto';

@Injectable()
export class ProgrammerService {
  create(createProgrammerDto: CreateProgrammerDto) {
    return 'This action adds a new programmer';
  }

  findAll() {
    return `This action returns all programmer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} programmer`;
  }

  update(id: number, updateProgrammerDto: UpdateProgrammerDto) {
    return `This action updates a #${id} programmer`;
  }

  remove(id: number) {
    return `This action removes a #${id} programmer`;
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgrammerService } from './programmer.service';
import { CreateProgrammerDto } from './dto/create-programmer.dto';
import { UpdateProgrammerDto } from './dto/update-programmer.dto';

@Controller('api/programmers')
export class ProgrammerController {
  constructor(private readonly programmerService: ProgrammerService) {}

  @Post()
  create(@Body() createProgrammerDto: CreateProgrammerDto) {
    return this.programmerService.create(createProgrammerDto);
  }

  @Get()
  findAll() {
    return this.programmerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programmerService.findOne(+id);
  }

  @Patch()
  update(@Body() updateProgrammerDto: UpdateProgrammerDto) {
    return this.programmerService.update(updateProgrammerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programmerService.remove(+id);
  }
}

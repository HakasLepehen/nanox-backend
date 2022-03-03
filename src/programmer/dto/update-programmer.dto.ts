import { PartialType } from '@nestjs/mapped-types';
import { CreateProgrammerDto } from './create-programmer.dto';

export class UpdateProgrammerDto extends PartialType(CreateProgrammerDto) {
  id: number;
}

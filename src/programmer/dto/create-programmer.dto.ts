import { Position } from '../enums/Position';

export class CreateProgrammerDto {
  firstName: string;
  lastName: string;
  middleName: string;
  position: Position;
  dateOfBirth: string;
  active: boolean;
}

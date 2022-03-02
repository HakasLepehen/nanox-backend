import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Position } from '../enums/Position';

@Entity({
  name: 'Programmer',
})
export class Programmer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @Column()
  position: Position;

  @Column()
  dateOfBirth: Date;

  @Column()
  active: boolean;
}

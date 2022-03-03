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

  @Column({
    type: 'enum',
    enum: Position,
  })
  position: Position;

  @Column()
  dateOfBirth: string;

  @Column()
  active: boolean;
}

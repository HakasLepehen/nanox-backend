import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Programmer } from './programmer/entities/programmer.entity';
import { ProgrammerModule } from './programmer/programmer.module';

@Module({
  imports: [
    ProgrammerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sonar55k',
      database: 'postgres',
      entities: [Programmer],
      synchronize: process.env.NODE_ENV === 'development' ? true : false,
    }),
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

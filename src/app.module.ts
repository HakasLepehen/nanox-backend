import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgrammerModule } from './programmer/programmer.module';

@Module({
  imports: [ProgrammerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-mongodb'),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://Calires:felipe23@cluster0.v9dm3.mongodb.net/test')],
  controllers: [],
  providers: [],
})

export class AppModule {}

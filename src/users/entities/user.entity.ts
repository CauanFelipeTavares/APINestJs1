import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HttpCode } from '@nestjs/common';


export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  sobrenome: string;

  @Prop({ required: true })
  senha: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  telefone: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
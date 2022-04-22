import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";

export type GenreDocument = Genre & Document;

@Schema()
export class Genre {
  @Prop()
  @ApiProperty()
  id: number

  @Prop()
  @ApiProperty()
  name: string
}

export const GenreSchema = SchemaFactory.createForClass(Genre);
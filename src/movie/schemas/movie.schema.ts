import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {ApiProperty} from "@nestjs/swagger";
import {Genre} from "./genre.schema";

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  @ApiProperty()
  remote_id: number;

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  overview: string;

  @Prop()
  @ApiProperty()
  popularity: number

  @Prop()
  @ApiProperty()
  voteAverage: number

  @Prop()
  @ApiProperty()
  voteCount: number

  @Prop()
  @ApiProperty()
  releaseDate: Date

  @Prop()
  @ApiProperty()
  genre: [Genre]
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
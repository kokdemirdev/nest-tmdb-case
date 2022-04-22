import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Genre} from "./genre.schema";

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  name: string;

  @Prop()
  overview: string;

  @Prop()
  popularity: number

  @Prop()
  voteAverage: number

  @Prop()
  voteCount: number

  @Prop()
  releaseDate: number

  @Prop()
  genre: Genre
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Movie, MovieSchema} from "./schemas/movie.schema";
import {MovieFetcherService} from "./movie-fetcher.service";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Movie.name, schema: MovieSchema}]),
    HttpModule
  ],
  controllers: [MovieController],
  providers: [MovieService, MovieFetcherService]
})
export class MovieModule {}

import {Injectable} from '@nestjs/common';
import {CreateMovieDto} from './dto/create-movie.dto';
import {Movie, MovieDocument} from "./schemas/movie.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose'

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) {}

  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const item = new this.movieModel(createMovieDto);
    return item.save();
  }

  findAll(): Promise<Movie[]>{
    return this.movieModel.find().exec();
  }

  findOne(id: string) {
    return this.movieModel.findById(id);
  }

  remove(id: string) {
    return this.movieModel.findByIdAndDelete(id);
  }
}

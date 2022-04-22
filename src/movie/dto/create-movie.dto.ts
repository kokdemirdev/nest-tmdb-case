import {Genre} from "../schemas/genre.schema";
import {ApiProperty} from "@nestjs/swagger";

export class CreateMovieDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  overview: string;

  @ApiProperty({
    required: false
  })
  popularity: number

  @ApiProperty()
  voteAverage: number

  @ApiProperty()
  voteCount: number

  @ApiProperty()
  releaseDate: Date

  @ApiProperty({
    type: [Genre]
  })
  genre: Genre
}

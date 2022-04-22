import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags
} from "@nestjs/swagger";
import {Movie} from "./schemas/movie.schema";

@ApiTags('movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiOperation({summary: 'Find all movies'})
  @ApiOkResponse({
    description: 'Movie list is returned',
    type: [Movie]
  })
  findAll() {
    return this.movieService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Find one movie by id'})
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Movie,
  })
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create movie' })
  @ApiCreatedResponse({
    description: 'Movie is created',
    type: Movie
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete one the movie by id'})
  @ApiNoContentResponse({
    description: 'Movie is deleted'
  })
  remove(@Param('id') id: string) {
    return this.movieService.remove(id);
  }
}

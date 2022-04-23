import {Injectable} from '@nestjs/common';
import {Cron, CronExpression} from "@nestjs/schedule";
import {HttpService} from "@nestjs/axios";
import {lastValueFrom} from "rxjs";
import {MovieService} from "./movie.service";

const TMDB_URL = 'https://api.themoviedb.org/3'
const API_KEY = '54740b1662bd557f4895722937faefbc'

@Injectable()
export class MovieFetcherService {
  constructor(private httpService: HttpService, private readonly movieService: MovieService) {}

  @Cron(CronExpression.EVERY_5_MINUTES)
  async handleCron() {
    const params = {
      'sort_by': 'release_date.asc',
      'vote_count.gte': 1500,
      'vote_average.gte': 8.4,
      'with_watch_providers': 8,
      'watch_region': 'TR'
    }
    const ids = await this.discoverMovieWithParams(params)

    try {
      await this.movieService.removeAll()
      for (const id of ids) {
        const movie = await this.fetchMovieById(id)
        await this.movieService.create(movie)
      }
      console.log(1)
    } catch (e) {
      console.log(e)
    }
  }

  async discoverMovieWithParams(params) {
    const _params = {'api_key': API_KEY, ...params}

    const response = await lastValueFrom(this.httpService.get(
      `${TMDB_URL}/discover/movie`,
      {params: _params}
    ))
    return response.data.results.map(result => result.id)
  }

  async fetchMovieById(movieId) {
    const {data} = await lastValueFrom(this.httpService.get(
      `${TMDB_URL}/movie/${movieId}`,
      {
        params: {
          'api_key': API_KEY,
        }
      }
    ))

    return {
      'remote_id': data.id,
      'name': data.name,
      'overview': data.overview,
      'popularity': data.popularity,
      'voteAverage': data.vote_average,
      'voteCount': data.vote_count,
      'releaseDate': data.release_date,
      'genre': data.genres
    }
  }
}

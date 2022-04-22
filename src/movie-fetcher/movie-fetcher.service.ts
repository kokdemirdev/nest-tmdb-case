import {Injectable} from '@nestjs/common';
import {Cron, CronExpression} from "@nestjs/schedule";
import {HttpService} from "@nestjs/axios";
import {lastValueFrom} from "rxjs";

@Injectable()
export class MovieFetcherService {
  constructor(private httpService: HttpService) {
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    const ids = this.discoverMovie()
  }

  async discoverMovie() {
    const params = {
      'api_key': '54740b1662bd557f4895722937faefbc',
      'sort_by': 'release_date.asc',
      'vote_count.gte': 1500,
      'vote_average.gte': 8.4,
      'with_watch_providers': 8,
      'watch_region': 'TR'
    }

    const response = await lastValueFrom(this.httpService.get(
      'https://api.themoviedb.org/3/discover/movie',
      {params}
    ))
    return response.data.results.map(result => result.id)
  }
}

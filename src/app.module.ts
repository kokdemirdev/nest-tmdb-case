import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {MovieModule} from './movie/movie.module';
import {ScheduleModule} from "@nestjs/schedule";
import { MovieFetcherService } from './movie-fetcher/movie-fetcher.service';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kokdemir:5rniLWUnB9mWoXpE@cluster0.u4t61.mongodb.net/netflix?retryWrites=true&w=majority'),
    ScheduleModule.forRoot(),
    MovieModule,
    HttpModule
  ],
  providers: [MovieFetcherService]
})
export class AppModule {
}

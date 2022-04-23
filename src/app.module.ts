import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {MovieModule} from './movie/movie.module';
import {ScheduleModule} from "@nestjs/schedule";
import {HttpModule} from "@nestjs/axios";
import {ConfigModule, ConfigService} from "@nestjs/config";
import * as Joi from "joi"

const configSchema = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB_URL: Joi.string().required()
})

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configSchema
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL')
      }),
      inject: [ConfigService]
    }),
    ScheduleModule.forRoot(),
    MovieModule,
    HttpModule
  ]
})
export class AppModule {}

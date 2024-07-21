import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { MoviesController } from './movies/movies.controller';
import { SeriesController } from './series/series.controller';
import { PeopleController } from './people/people.controller';

@Module({
  imports: [],
  controllers: [AppController, HomeController, MoviesController, SeriesController, PeopleController],
  providers: [AppService],
})
export class AppModule {}

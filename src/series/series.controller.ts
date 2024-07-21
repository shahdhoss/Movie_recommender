import { Controller, Get} from '@nestjs/common';
import * as rp from 'request-promise'

@Controller('series')
export class SeriesController {
    @Get('/trending')
    async trending(): Promise<any> {
    const request = require('request');
    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTMyMzBjMTlkM2QwZjJhZWQ0MTk5NmMwNGJlYTM4YiIsIm5iZiI6MTcyMTU1NDIwOS43NDM2NjgsInN1YiI6IjY2OGZjOGFlZmE4NGNkYmNkNzRhODkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BgEiaPZcNW0_y2bIGAKiyqlLOzcxnccMZAzJU-uTrak'
    },
    json:true
    };
    try{
        const response =await rp(options);
        return response;
    }
    catch(error){
        throw new Error(error)
        }
    }
    @Get('/top_rated')
    async top_rated(): Promise<any> {
    const request = require('request');
    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTMyMzBjMTlkM2QwZjJhZWQ0MTk5NmMwNGJlYTM4YiIsIm5iZiI6MTcyMTU1NDIwOS43NDM2NjgsInN1YiI6IjY2OGZjOGFlZmE4NGNkYmNkNzRhODkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BgEiaPZcNW0_y2bIGAKiyqlLOzcxnccMZAzJU-uTrak'
    },
    json:true
    };
    try{
        const response =await rp(options);
        return response;
    }
    catch(error){
        throw new Error(error)
        }
    }
    @Get('/airing_today')
    async airing_today(): Promise<any> {
    const request = require('request');
    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTMyMzBjMTlkM2QwZjJhZWQ0MTk5NmMwNGJlYTM4YiIsIm5iZiI6MTcyMTU1NDIwOS43NDM2NjgsInN1YiI6IjY2OGZjOGFlZmE4NGNkYmNkNzRhODkxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BgEiaPZcNW0_y2bIGAKiyqlLOzcxnccMZAzJU-uTrak'
    },
    json:true
    };
    try{
        const response =await rp(options);
        return response;
    }
    catch(error){
        throw new Error(error)
        }
    }
}

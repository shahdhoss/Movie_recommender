import { Controller, Get } from '@nestjs/common';
import * as rp from 'request-promise'

@Controller('home')
export class HomeController {
    @Get('/trending_movies_today')
    async trending_movies_today(): Promise<any> {
    const request = require('request');
    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
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
    @Get('trending_movies_this_week')
    async trending_movies_this_week(): Promise<any>{
    const request = require('request');
    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
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
    @Get('now_playing')
    async now_playing(): Promise<any>{
        const request = require('request');
    const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
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


// src/app/services/tvmaze.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MoviesSearch } from '../models/movie.model';

@Injectable({
    providedIn: 'root',
})
export class TvmazeService {
    private http = inject(HttpClient);

    public getMovieDetails(movieId: string): Observable<Movie> {
        return this.http.get<Movie>(`/shows/${movieId}`);
    }

    public searchShows(query: string): Observable<MoviesSearch[]> {
        return this.http.get<MoviesSearch[]>(`/search/shows?q=${query}`);
    }
}

import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

// Models
import { MoviesSearch } from '../../models/movie.model';
@Component({
    selector: 'app-display-movies',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './display-movies.component.html',
    styleUrl: './display-movies.component.scss',
})
export class DisplayMoviesComponent {
    @Input() movies: MoviesSearch[] = [];
    @Input() noMovies: boolean = false;
}

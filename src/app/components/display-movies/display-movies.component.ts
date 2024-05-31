import { Component, Input } from '@angular/core';

// Models
import { MoviesSearch } from '../../models/movie.model';
import { RouterLink } from '@angular/router';

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

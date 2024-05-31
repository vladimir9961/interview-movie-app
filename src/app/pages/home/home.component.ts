import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

// Services
import { TvmazeService } from '../../services/getMovies.service';

// Components
import { DisplayMoviesComponent } from '../../components/display-movies/display-movies.component';
import { MoviesSearch } from '../../models/movie.model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ReactiveFormsModule, DisplayMoviesComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    private tvmazeService = inject(TvmazeService);
    private destroyRef = inject(DestroyRef);

    public searchFormControl: FormControl = new FormControl('');

    public movies: MoviesSearch[] = [];
    public nothingFound: boolean = false;

    ngOnInit(): void {
        this.formSearchValue();
    }

    private getMovies(query: string): void {
        this.tvmazeService
            .searchShows(query)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((movies) => {
                if (query && movies.length === 0) {
                    this.nothingFound = true;
                } else {
                    this.movies = movies;
                    console.log(movies);
                    this.nothingFound = false;
                }
            });
    }

    public formSearchValue(): void {
        this.searchFormControl.valueChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((res) => {
                this.getMovies(res);
            });
    }
}

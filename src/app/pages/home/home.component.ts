import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
    ReactiveFormsModule,
    FormControl,
    FormGroup,
    FormBuilder,
} from '@angular/forms';

// Services
import { TvmazeService } from '../../services/getMovies.service';

// Models
import { MoviesSearch } from '../../models/movie.model';

// Directives
import { ClickOutsideDirective } from '../../directives/click-outside.directive';

// Components
import { DisplayMoviesComponent } from '../../components/display-movies/display-movies.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        ReactiveFormsModule,

        ClickOutsideDirective,

        DisplayMoviesComponent,
        InputComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    private destroyRef = inject(DestroyRef);
    public fb = inject(FormBuilder);

    private tvmazeService = inject(TvmazeService);

    public searchForm: FormGroup = this.fb.group({
        searchFormControl: [''],
    });

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
                    this.nothingFound = false;
                }
            });
    }

    public formSearchValue(): void {
        this.searchForm.controls['searchFormControl'].valueChanges
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((res) => {
                this.getMovies(res);
            });
    }

    public removeQueryFromInput(): void {
        this.searchForm.reset();
    }

    public onClickedOutside(): void {
        this.movies = [];
    }
}

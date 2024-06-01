import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// Models
import { MoviesSearch } from '../../models/movie.model';

// Pipes
import { ConvertMinutesPipe } from '../../pipes/minutest-to-hours.pipe';

// Services
import { LoadingService } from '../../services/LoadingService.service';
@Component({
    selector: 'app-display-movies',
    standalone: true,
    imports: [RouterLink, ConvertMinutesPipe],
    templateUrl: './display-movies.component.html',
    styleUrl: './display-movies.component.scss',
})
export class DisplayMoviesComponent implements OnInit {
    @Input() movies: MoviesSearch[] = [];
    @Input() noMovies: boolean = false;

    public loadingService = inject(LoadingService);

    public isSetPlaceholder: boolean = false;

    ngOnInit(): void {
        this.isImagesLoading();
    }

    public isImagesLoading(): void {
        this.loadingService.loading$.subscribe((res) => {
            console.log(res);
            this.isSetPlaceholder = res;
        });
    }
}

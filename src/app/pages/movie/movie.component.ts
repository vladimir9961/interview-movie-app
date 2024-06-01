import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

// Services
import { TvmazeService } from '../../services/getMovies.service';
import { Movie } from '../../models/movie.model';
import { ConvertMinutesPipe } from '../../pipes/minutest-to-hours.pipe';

@Component({
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.scss',
    imports: [ConvertMinutesPipe],
})
export class MovieComponent {
    private destroyRef = inject(DestroyRef);
    private route = inject(ActivatedRoute);
    private tvmazeService = inject(TvmazeService);

    public movieDetails: Movie | undefined;

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const id = params['id'];
            this.tvmazeService
                .getMovieDetails(id)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((movie) => {
                    this.movieDetails = movie;
                });
        });
    }
}

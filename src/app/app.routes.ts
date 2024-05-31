import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movie/:id', component: MovieComponent }
];

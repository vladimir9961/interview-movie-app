export interface MoviesSearch {
    score: number;
    show: Movie;
}

export interface Movie {
    id: number;
    averageRuntime: number;
    ended: string;
    image: {
        medium: string;
        original: string;
    };
    genres: string[];
    language: string;
    name: string;
    premiered: string;
    rating: {
        average: number;
    };
    runtime: number;
    summary: string;
}

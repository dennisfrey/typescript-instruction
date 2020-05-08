import { Movie } from "../model/movie.class";


export class MovieService {
    // Our movie service class.  Holds a list of movies
    // and provides CRUD functions.
    movies: Movie[] = [];

    list(): Movie[]{
        return this.movies;
    }

    get(id: number): Movie {
        let m: Movie = new Movie();

        for (let movie of this.movies) {
            if (movie.id == id){
                m = movie;
            }
        }

        return m;
    }

    add(movie: Movie): void {
        this.movies.push(movie);
    }

    delete(id: number): void {
        for (let movie of this.movies){
            if (movie.id == id) {
                let idx: number = this.movies.indexOf(movie);
                this.movies.splice(idx,1);
            }
        }
    }

}
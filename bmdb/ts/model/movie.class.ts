export class Movie {
    id: number;
    title: string;
    year: number;
    rating: string;
    director: string;

    constructor(id: number = 0, title: string = "", year: number = 0, rating: string = "",
        director: string = "") {
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.director = director;
    }

    about(): void{
        console.log(`${this.title}, rated ${this.rating}, was released
        in ${this.year}. Directed by ${this.director}.`);
    }
}

/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateMovieInput {
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export abstract class IQuery {
    abstract movies(): Nullable<Nullable<Movie>[]> | Promise<Nullable<Nullable<Movie>[]>>;

    abstract movie(id: string): Nullable<Movie> | Promise<Nullable<Movie>>;
}

export abstract class IMutation {
    abstract createMovie(createMovieInput?: Nullable<CreateMovieInput>): Nullable<Movie> | Promise<Nullable<Movie>>;
}

export class Movie {
    title: string;
    genre: string;
    year: number;
    id: string;
}

type Nullable<T> = T | null;

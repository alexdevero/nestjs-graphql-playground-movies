import { Injectable } from '@nestjs/common'

import { MoviesResolver } from './movies/graphql/resolvers/movie.resolver'

@Injectable()
export class MoviesService {
  constructor (
    private moviesResolver: MoviesResolver
  ) {}

  findOneById(id: number): Promise<string> {
    return this.moviesResolver.movie(id)
  }
}

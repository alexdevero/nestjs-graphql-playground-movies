import { Args, Int, Query, Resolver } from '@nestjs/graphql'

import { Movie } from '../../models/movie.model'

import { MoviesService } from '../../../movies.service'

@Resolver(of => Movie)
export class MoviesResolver {
  constructor(
    private moviesService: MoviesService
  ) {}

  @Query(returns => Movie)
  async movie(@Args('id', { type: () => Int }) id: number) {
    return this.moviesService.findOneById(id)
  }
}

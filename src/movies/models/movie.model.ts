import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Post } from './post';

@ObjectType()
export class Movie {
  @Field(type => Int)
  id: number

  @Field(type => String)
  title: string

  @Field(type => String)
  genre: string

  @Field(type => Int)
  year: number

  @Field({ nullable: true })
  rating?: number
}

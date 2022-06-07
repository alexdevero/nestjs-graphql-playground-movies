import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieType {
  @Field((type => ID))
  id: string

  @Field()
  title: string

  @Field()
  genre: string

  @Field()
  year: Date

  @Field({ nullable: true })
  rating: number
}

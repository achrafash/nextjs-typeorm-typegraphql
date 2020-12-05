import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Post } from '@models/post.model'
import { CreatePostInput } from 'src/inputs/createPostInput'

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts() {
        return Post.find()
    }

    @Query(() => Post)
    post(@Arg('id') id: string) {
        return Post.findOne({ where: { id } })
    }

    @Mutation(() => Post)
    async createPost(@Arg('data') data: CreatePostInput) {
        const post = Post.create(data)
        await post.save()
        return post
    }
}

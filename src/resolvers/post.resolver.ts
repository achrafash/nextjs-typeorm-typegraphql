import {
    Resolver,
    Query,
    Mutation,
    Arg,
    FieldResolver,
    Root,
    InputType,
    Field
} from 'type-graphql'
import { Post } from '@models/post.model'
import { Comment } from '@models/comment.model'

@InputType()
export class CreatePostInput {
    @Field()
    title: string

    @Field()
    body: string
}

@Resolver(Post)
export class PostResolver {
    @FieldResolver(() => [Comment])
    comments(@Root() parent: Post) {
        return Comment.find({ where: { postId: parent.id } })
    }

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

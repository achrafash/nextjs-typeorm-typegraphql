import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-micro'
import { buildSchema } from 'type-graphql'
import { PostResolver } from '@resolvers/post.resolver'
import { NextApiRequest, NextApiResponse } from 'next'
import { getOrCreateConnection } from '@utils/index'
import { CommentResolver } from '@resolvers/comment.resolver'

export const config = {
    api: {
        bodyParser: false
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await getOrCreateConnection()
    const schema = await buildSchema({
        resolvers: [PostResolver, CommentResolver]
    })

    const apolloServer = new ApolloServer({ schema })

    return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

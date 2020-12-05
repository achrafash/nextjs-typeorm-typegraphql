import { GetServerSideProps } from 'next'
import { getOrCreateConnection } from '@utils/index'
import { Post } from '@models/post.model'

export default function Home(props) {
    return (
        <div>
            <pre>{JSON.stringify(props.posts)}</pre>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const connection = await getOrCreateConnection()
    const postRepo = connection.getRepository<Post>('Post')
    const posts = await postRepo.find()

    console.log(posts)

    return {
        props: { msg: '', posts: posts.map((post) => ({ ...post })) }
    }
}

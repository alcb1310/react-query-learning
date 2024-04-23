import { fetchPosts } from '../query/post'
import Post from './Post'
import { useQuery } from '@tanstack/react-query'

export default function Posts() {
    const {
        data: posts,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    })

    if (isError) return <div>Error</div>
    if (isLoading) return <div>Loading</div>

    return (
        <div className="px-8 py-8 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto">
            {posts?.map((post) => <Post key={post.id} id={post.id} />)}
        </div>
    )
}

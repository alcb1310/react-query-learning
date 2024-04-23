import { useEffect, useState } from 'react'
import { PostType } from '../types/post'
import { fetchPosts } from '../query/post'
import Post from './Post'

export default function Posts() {
    const [posts, setPosts] = useState<PostType[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        try {
            fetchPosts().then((data) => setPosts(data))
        } catch (error) {
            setIsError(true)
            console.error(error)
        }
        setIsLoading(false)
    }, [])

    if (isError) return <div>Error</div>
    if (isLoading) return <div>Loading</div>

    console.log(posts)

    return (
        <div className="px-8 py-8 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto">
        </div>
    )
}

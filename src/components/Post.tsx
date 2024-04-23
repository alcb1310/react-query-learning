import { useEffect, useState } from 'react'
import { PostType } from '../types/post'
import { fetchOnePost } from '../query/post'

type PostProps = {
    id: number
}

export default function Post({ id }: PostProps) {
    const [post, setPost] = useState<PostType | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        try {
            fetchOnePost(id).then((data) => setPost(data))
        } catch (err) {
            setIsError(false)
            console.error(err)
        }

        setIsLoading(false)
    }, [])

    if (isError) return <div>Error</div>
    if (isLoading) return <div>Loading</div>

    return (
        <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
            <div className="px-6 py-4">
                <h3 className="text-gray-800 font-bold text-xl mb-2">
                    {post?.title}
                </h3>
                <p className="text-gray-600 text-base">{post?.body}</p>
            </div>
        </div>
    )
}

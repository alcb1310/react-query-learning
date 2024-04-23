import { PostType } from "../types/post";

const url = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts(): Promise<PostType[]> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        throw error
    }
}

export async function fetchOnePost(id: number): Promise<PostType> {
    try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        return data
    } catch (error) {
        throw error
    }
}

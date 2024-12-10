import { useState } from "react"
import fetchPosts from "../api/fetchPosts";

export function PostsLoading(){
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    async function loadPosts(){
        setLoading(true);
        try{
            const newPosts = await fetchPosts(page);
            setPosts((prev) => [...prev, ...newPosts]);
            setPage((prev) => prev + 1)
        } catch (error){
            console.error("Ошибка: ", error);
        }
        setLoading(false);
    }

    return {posts, loadPosts, isLoading};
}
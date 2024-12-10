import React from "react";
import {PostsLoading} from '../../features/Posts/model/usePosts'
import PostList from "../../features/Posts/ui/PostsList";
import LoadButton from "../../features/Posts/ui/LoadButton";
import './index.css'

function PostPages() {
    const {posts, loadPosts, isLoading} = PostsLoading();

    return(
        <div>
            <h1>Посты</h1>
            <PostList posts={posts} />
            <LoadButton
            onClick={loadPosts}
            isLoading={isLoading}
            />
        </div>
    )
}

export default PostPages;
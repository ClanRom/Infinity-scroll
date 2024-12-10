import './PostsList.css'

export default function PostList({posts}){
    return (
    <ul>
        {posts.map((post) =>(
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
        ))}
    </ul>
    )
}
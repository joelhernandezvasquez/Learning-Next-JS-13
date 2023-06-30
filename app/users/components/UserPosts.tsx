import {FC} from 'react';
import { Post } from "@/types";

interface PostProps{
    posts: Post []
}

const UserPosts:FC<PostProps> = ({posts}) => {
  
    return (
    <>
    {posts.map((post:Post)=>{
     return (
        <article key={post.id}>
         <h2>{post.title}</h2>
         <p>{post.body}</p>
        </article>
     )
    })}
    </>
  )
}

export default UserPosts
import { Suspense } from "react";
import { getUser, getUserPost } from "@/app/services";
import { UsersResponse,Post } from '@/types';
import UserPosts from "../components/UserPosts";


type Params = {
    params:{
        userId:string
    }
}
const Userpage = async ({params:{userId}}:Params) => {

    const userData:Promise<UsersResponse> = await getUser(userId);
    const userPostsData:Promise<Post []> = await getUserPost(userId);

    const [user, userPosts] = await Promise.all([userData,userPostsData])

  return (
    <section>
      <h2 style={{marginTop:'1rem',marginBottom:'1rem'}}>{user.name}</h2>
       <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts posts={userPosts}/>
       </Suspense>
    </section>
  )
}

export default Userpage
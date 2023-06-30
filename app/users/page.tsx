import {Metadata} from 'next';
import  Link from 'next/link';
import { getAllUsers } from '../services';
import { UsersResponse } from '@/types';

export const metadata: Metadata ={
 title:'Users page',
 description:'this is the users page'
}

const Users = async () => {
    
 const usersData:Promise<UsersResponse []> = getAllUsers();
 const users = await usersData;

 console.log(users);
 
 return (
    <section>
      <h2>
      <Link href="/">Go back to Home</Link>   
     </h2>  

     <ul>
        {users.map((user)=>{
         
         return (
            <li key={user.id}>
                <p style={{marginTop:'1rem;'}}>
                 <Link href={`users/${user.id}`}>{user.name}</Link>
                </p>
            </li>
          )
        })}
     </ul>
    </section>
  )
}

export default Users
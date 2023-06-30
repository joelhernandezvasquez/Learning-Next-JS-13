
import { UsersResponse } from "@/types";

export const getAllUsers = async () =>{
 try{
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users")
     if(!userResponse.ok)  throw new Error('failed to fetch data');
     
     return userResponse.json(); 
 }

 catch(err){
   console.log(err);
 }
  
}

export const getUser = async (userId:string) =>{
    try{
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if(!userResponse.ok) throw new Error('failed to fetch data');

        return userResponse.json();
    }
    catch(err){
        console.log(err);
    }
    
}

export const getUserPost = async (userId:string) =>{
    try{
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        if(!userResponse.ok) throw new Error('failed to fetch data');

        return userResponse.json();
    }
    catch(err){
        console.log(err);
    }
    
}
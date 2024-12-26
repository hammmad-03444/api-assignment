import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PostCard from "@/components/ui/PostCard";

import Image from "next/image";
interface Post{
  userId:number,
  id:number,
  title:string,
  body:string
}

export default async function Home() {
  const response=await fetch('http://localhost:3000/api/external')
  
    const data=await response.json()
    if(!response.ok){
      return <div>Something Went Wrong</div>
    }
    // const data=await response.json()
    const posts:Post[]=data.posts
  
  return (
    <div className='min-h-screen items-center flex flex-col '>
        <h1 className='text-2xl m-4 p-4 '>POSTS</h1>
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4' >
    {posts.map((post)=>(
      <PostCard key={post.id} title={post.title} body={post.body} />

    ))}
    </div>
    </div>
  );
}

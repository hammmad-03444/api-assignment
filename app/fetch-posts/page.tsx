'use client'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const page = () => {
    const[posts,setPosts]=useState([])
    const[error,setError]=useState('')
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
      fetch('/api/external/')
      .then((res)=>res.json())
      .then((data)=>{
        setPosts(data.posts)
        setLoading(false)
      })
      .catch((error)=>{
        setError(error.message)
        setLoading(false)
      })
},[])
  return (
    <div className='min-h-screen items-center flex flex-col '>
        <h1 className='text-2xl m-4 p-4 '>POSTS</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {posts.map((post:{id:number,title:string,body:string})=>(
             <Card key={post.id}>
             <CardHeader>
               <CardTitle >{post.title}</CardTitle>

             </CardHeader>
             <CardContent>
               {post.body}
             </CardContent>
            
           </Card>
        ))}
        </div>
       

    </div>
  )
}

export default page
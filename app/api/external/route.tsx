import { NextResponse } from "next/server";
const Post_API='https://jsonplaceholder.typicode.com/posts'

export const GET=async()=>{
    try{
        const response=await fetch(Post_API)
        if(!response.ok){
            return NextResponse.json(
                {sucess:false,message:"Failed to fetch data"},{status:500})
        }
        const posts=await response.json()
        return NextResponse.json(
            {sucess:true,posts},{status:200})
    }
    catch (error:any){
        return NextResponse.json(
            {sucess:false,message:"Failed to fetch data",error:error.message}
        )
    }
}
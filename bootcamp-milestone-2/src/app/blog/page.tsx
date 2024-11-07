import { JSX } from "react";
import blogs from "../blogData";
import { Blog } from "../blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blog(){
    return (
        blogs.map((blog:Blog) => 
            <BlogPreview {...blog}/>)
        
    )
}
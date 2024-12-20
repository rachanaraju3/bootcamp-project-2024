import type {IProject} from "@/database/projectSchema";
import style from './projectPreview.module.css';
import Link from "next/link";
import Image from "next/image";
import Comment, { IComment } from "./comment";
import CommentSection from "./commentSection";

export default function ProjectPreview(props: IProject){
    const details: String[] = props.details.split(". ")

    function formatDetails(detail: String){
        return <p className={style.projectDetailsText}>{detail.trim() + "."}</p>
    }

    function displayComments(){
        if (props.comments.length == 0){
            return(
                <div className={style.projectDetailsText}>
                    No comments right now.
                </div>
            )
        }
        return (
            props.comments.map((comment: IComment, index: number) => (
                <Comment key={index} comment={comment} />)))
    }
    
    return (
        <div className={style.projectLayout}>
            <div className={style.project}>
                <div className={style.projectImage}>
                    <Link href={props.link} target="_blank">
                        <Image src={props.image} width={400} height={40} alt={props.imageAlt}/>
                    </Link>
                </div>
                <div className={style.projectDetails}>
                    <h2 className={style.projectName}>{props.title}</h2>
                    <div>
                        {details.map((detail) => formatDetails(detail))}
                    </div>
                    <Link href={props.link} className={style.projectLink}>Learn More</Link>
                </div>
                <div className={style.projectComments}>
                    <h4 className={style.commentHead}>Comments</h4>
                    {displayComments()}
                    <CommentSection slug={props.title} type="project"/>
                </div>
            </div> 
        </div>

    )
}
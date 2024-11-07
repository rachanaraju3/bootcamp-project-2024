import Image from "next/image"
import style from "../blogs.module.css"

export default function Ufo(){
    return (
        <div className={style.main}>
            <h1 className={style.h1}>UFO Data!</h1>
            <h5 className={style.h5}>Posted: 10/21/24</h5>
            <Image className={style.image} width={300} height={200} src="/ufo.png" alt="image of ufo data page"/>
            <p>UFO Data in the past years.</p>
        </div>
    )
}
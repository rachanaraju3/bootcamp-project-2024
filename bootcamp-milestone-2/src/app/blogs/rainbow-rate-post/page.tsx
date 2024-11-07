import Image from "next/image"
import style from "../blogs.module.css"

export default function RainbowRate(){
    return (
        <div className={style.main}>
           <h1 className={style.h1}>Rainbow Rate!</h1>
            <h5 className={style.h5}>Posted: 10/21/24</h5>
            <Image className={style.image} width={300} height={200} src = "/rainbowrate.png" alt="image of rainbow rate homepage"/>
            <p>This is Rainbow Rate.</p>  
        </div>
    )
}
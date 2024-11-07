import Image from "next/image"
import style from "../blogs.module.css"

export default function PurelyYou(){
    return (
        <div className={style.main}>
            <h1 className={style.h1}>PurelyYou</h1>
            <h5 className={style.h5}>Posted: 8/21/23</h5>
            <Image className={style.image} width={300} height={200} src = "/PurelyYou.png" alt="image of purely you home page"/>
            <p>Personalized Skincare Recs!</p>
        </div>
    )
}
import style from './contact.module.css'

export default function Contact(){
    return(
             <main className={style.main}>
                <h1 className={style.pageTitle}>Contact</h1>
                <form className={style.form} id="contact-form">
                    <label className={style.label}>Name</label>
                    <input className={style.text} type="text" id="name" name="name"/>
                    <br/><br/>
                    <label className={style.label}>Email</label>
                    <input className={style.text} type="email" id="email" name="email"/>
                    <br/><br/>
                    <label className={style.label}>Message</label>
                    <textarea className={style.text} id="Message" name="Message"></textarea>
                    <br/><br/>
                    <input className={style.submit} type="submit" id="submit" name="submit"/>
                </form>
            </main>
    )
}
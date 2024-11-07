import style from './portfolio.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio(){
    return (
        <div className={style.main}>
            <h1 className={style.pageTitle}>Portfolio</h1>
            <div className={style.projectLayout}>
                <div className={style.project}>
                    <div className={style.projectImage}>
                        <Link href="https://github.com/rachanaraju3/PantryApp" target="_blank">
                            <Image src="/pantrypal.png" width={400} height={40} alt="Image of pantry pal homepage"/>
                        </Link>
                    </div>
                    <div className={style.projectDetails}>
                        <h2 className={style.projectName}>PantryPal</h2>
                        <p className={style.projectDetailsText}>Pantry app to manage inventory.</p>
                        <p className={style.projectDetailsText}>Added search functionality to filter and return relevant items present in database.</p>
                        <p>Tech stack: Next.js, MaterialUI, Firebase</p>
                        <Link href="https://github.com/rachanaraju3/PantryApp">Learn More</Link>
                    </div>
                </div> 
                <div className={style.project}>
                    <div className={style.projectImage}>
                        <Link href="https://github.com/rachanaraju3/AI-chatbot" target="_blank">
                            <Image src="/chatbot.png" width={400} height={40} alt="Image of chatbot homepage"/>
                        </Link>
                    </div>
                    <div className={style.projectDetails}>
                        <h2 className={style.projectName}>PurelyYou AI Chatbot</h2>
                        <p className={style.projectDetailsText}>AI-powered chatbot to help users navigate the PurelyYou site and understand PurelyYou.</p>
                        <p className={style.projectDetailsText}>Built using Gemini API.</p>
                        <p>Tech stack: Next.js, React, JavaScript, MaterialUI, Gemini API</p>
                        <Link href="https://github.com/rachanaraju3/AI-chatbot">Learn More</Link>
                    </div>
                </div> 
                <div className={style.project}>
                    <div className={style.projectImage}>
                        <Link href="https://github.com/aditiShukla27/PurelyYou-skincarereco" target="_blank">
                            <Image src="/PurelyYou.png" width={400} height={40} alt="Image of PurelyYou homepage"/>
                        </Link>
                    </div>
                    <div className={style.projectDetails}>
                        <h2 className={style.projectName}>PurelyYou</h2>
                        <p className={style.projectDetailsText}>Personalized skin care recommendations based on your needs.</p>
                        <p className={style.projectDetailsText}>Implemented a web scraper to efficiently create database of 500+ skincare items and their properties</p>
                        <p>Tech stack: Python, BeautifulSoup, HTML, CSS</p>
                        <Link href="https://github.com/aditiShukla27/PurelyYou-skincarereco">Learn More</Link>
                    </div>
                </div> 
                <div className={style.project}>
                    <div className={style.projectImage}>
                        <Link href="https://github.com/SumedhaKun/911_clusters_frontend">
                            <Image src="/cluster_img.png" width={400} height={40} alt="Image of a clustering graph"/>
                        </Link>
                    </div>
                    <div className={style.projectDetails}>
                        <h2 className={style.projectName}>Clustering Project</h2>
                        <h4>Hackathon project</h4>
                        <p className={style.projectDetailsText}>Project to cluster different unsolved crime reports in order to find similarities and links between them.</p>
                        <p className={style.projectDetailsText}>Utilized k-means algorithm.</p>
                        <Link href="https://github.com/SumedhaKun/911_clusters_frontend">Learn More</Link>
                    </div>
                </div> 
            <div className={style.project}>
                <div className={style.projectImage}>
                    <Link href="https://github.com/sophiapeckner/calpoly_ratemy">
                        <Image src="/rainbowrate.png" width={400} height={40} alt="Image of rainbow rate's homepage featuring a colorful star and the words 'rainbow rate'"/>
                    </Link>
                </div>
                <div className={style.projectDetails}>
                    <h2 className={style.projectName}>Full Stack Web App</h2>
                    <h4>Hackathon project</h4>
                    <p className={style.projectDetailsText}>Web App that allows Cal Poly Students to rate how LGBTQ+ friendly the different organizations on campus are.</p>
                    <p className={style.projectDetailsText}>Utilized React, Node, Express, MongoDB</p>
                    <Link href="https://github.com/sophiapeckner/calpoly_ratemy">Learn More</Link>
                </div>
            </div> 
            <div className={style.project}>
                <div className={style.projectImage}>
                    <Image src="/ufo.png" width={400} height={40} alt="Image of a data analyzation dashboard"/>
                </div>
                <div className={style.projectDetails}>
                    <h2 className={style.projectName}>Class Project</h2>
                    <p className={style.projectDetailsText}>Created a website analyzing data on UFO sightings across the US.</p>
                    <p>Utilized TypeScript, HTML, CSS, and Vega-Lite</p>
                </div>
            </div>
            <div className={style.project}>
                <div className={style.projectImage}>
                    <Link href="index.html">
                        <Image width={400} height={40} src="/painting.jpg" alt="Image of a desktop, keyboard, mouse, and someone holding a palette of paint above the keyboard."/>
                    </Link>
                </div>
                <div className={style.projectDetails}>
                    <h2 className={style.projectName}>Rachana's Website</h2>
                    <p className={style.projectDetailsText}>My personal website that I built implementing HTML and CSS.</p>
                    <Link href="index.html">Learn More</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
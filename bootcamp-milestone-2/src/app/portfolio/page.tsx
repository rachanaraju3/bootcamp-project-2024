import style from './portfolio.module.css';
import { IProject } from '@/database/projectSchema';
import projects from '../projectData';
import ProjectPreview from '@/components/projectPreview';

export default async function Portfolio(){
    if (projects !== null){
        return (
            <div className={style.main}>
                <h1 className={style.pageTitle}>Portfolio</h1>
                <div className={style.projectLayout}>
                    {(await projects)?.map((project) => project._doc).map((project: IProject) => 
                <ProjectPreview {...project} key={project.title}/>)}
                </div>
            </div>
            
        )
    }
    return (
        <div className={style.main}>
            <h1 className={style.pageTitle}>Portfolio</h1>
            <div className={style.projectLayout}>
                <p>No current projects.</p>
            </div>
        </div>
 
    )
}
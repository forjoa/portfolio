// projects
import projects from '../constants/projectsInfo.js'

// components 
import Project from './Project.jsx'

// styles
import '../styles/Projects.css'

const Projects = () => {
    return (
        <article className='projects'>
            {projects.map((project, key) => {
                return (
                    <Project project={project} key={key}/>
                )
            })}
        </article>
    )
}

export default Projects
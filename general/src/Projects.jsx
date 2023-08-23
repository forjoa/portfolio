import ProjectItem from './ProjectItem.jsx'
import './styles/projects.css'
import projects from './constants/projectsInfo.js'

const Projects = () => {
    return (
        <main className='main'>
            <div className="main-title">
                <h2 className='projects-title'>Mis proyectos:</h2>
            </div>

            <div className="main-projects">
                {projects.map((project, index) => (
                    <ProjectItem key={index} props={project} />
                ))}
            </div>
        </main>
    )
}

export default Projects

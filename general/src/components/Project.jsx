// icons
import { IconArrowRight } from '@tabler/icons-react'

const Project = (props) => {
    const { title, description, languages, image } = props.project;

    return (
        <div className="project">
            <h2>{title}<IconArrowRight className='title-arrow'/></h2>
            <p>{description}</p>
            <div className="project-lang">
                {Object.entries(languages).map((language, key) => {
                    return (
                        <div key={key}>
                            <img src={language[1].icon} alt={language.name} />
                            <span>{language[1].name}</span>
                        </div>
                    );
                })}
            </div>
            <img src={image} alt={title} className="project-img"/>
        </div> 
    );
}

export default Project;

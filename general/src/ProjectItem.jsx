import './styles/projectitem.css'
import AOS from 'aos'
import { useEffect } from 'react'

const ProjectItem = ({ props }) => {
    useEffect(() => {
        AOS.init()
    }, [])

    const backgroundImageStyle = {
        backgroundImage: `url(${props.image})`
    }

    const languagesArray = Object.values(props.languages)

    const openRepository = (link) => {
        window.open(link)
    }

    return (
        <div className="card" style={backgroundImageStyle} onClick={() => openRepository(props.repository)} data-aos="zoom-in-down">
            <div className="card__content">
                <p className="card__title">{props.title}</p>
                <p className="card__description">{props.description}</p>
                <div className="lang-general">
                    {languagesArray.map((lang, index) => {
                        return (
                            <div className="lang-info" key={index}>
                                <img src={lang.icon} alt={lang.name} />
                                <span>{lang.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem

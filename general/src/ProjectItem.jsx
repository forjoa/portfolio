import './styles/projectitem.css'

const ProjectItem = ({ props }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${props.image})`
    }

    const languagesArray = Object.values(props.languages)

    return (
        <div className="card" style={backgroundImageStyle}>
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

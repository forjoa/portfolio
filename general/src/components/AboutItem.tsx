import React from 'react'

const AboutItem = (props) => {

    return (
        <div className={props.prop.id % 2 === 0 ? 'about-container inverted' : 'about-container'}>
            <h2>{props.prop.title}</h2>
            <img src={props.prop.img} alt={props.prop.title} />
            <p>{props.prop.description}</p>
        </div>
    )
}

export default AboutItem
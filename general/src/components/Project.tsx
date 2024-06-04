// icons
import React from 'react'
import { IconArrowRight } from '@tabler/icons-react'

const Project = ({ project } : { project: PorjectI }) => {
  const { title, description, languages, image, repository } = project

  return (
    <div className='project' onClick={() => window.open(repository, '_blank')}>
      <h2>
        {title}
        <IconArrowRight className='title-arrow' />
      </h2>
      <p>{description}</p>
      <div className='project-lang'>
        {languages.map((language, key) => {
          return (
            <div key={key}>
              <img src={language.icon} alt={language.name} />
              <span>{language.name}</span>
            </div>
          )
        })}
      </div>
      <img src={image} alt={title} className='project-img' />
    </div>
  )
}

export default Project

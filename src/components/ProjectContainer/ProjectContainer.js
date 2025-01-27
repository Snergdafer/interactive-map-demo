import { useContext } from 'react';
import { StateContext } from '../../contexts/appState';
import uniqid from 'uniqid'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [{ setIsMap }] = useContext(StateContext)
  
  return (
  <div className='project'>
      <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <h3>{project.name}</h3>

          <p className='project__description'>{project.description}</p>
          {project.stack && (
            <ul className='project__stack'>
              {project.stack.map((item) => (
                <li key={uniqid()} className='project__stack-item'>
                  {item}
                </li>
              ))}
            </ul>
          )}
      </a>
  </div>
)}

export default ProjectContainer

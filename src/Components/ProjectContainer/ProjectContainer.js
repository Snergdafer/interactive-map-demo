import uniqid from 'uniqid'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project, handleNavigationPress }) => (
  <a
  href={(project.livePreview === '#map' ? null : project.livePreview)}
  aria-label='live preview'
  className='project'
  onClick={(project.livePreview === '#map' ? () => handleNavigationPress('map') : null)}
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
)

export default ProjectContainer

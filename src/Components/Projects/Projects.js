import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({ handleNavigationPress }) => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects' style={{marginTop: '70px'}}>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} handleNavigationPress={handleNavigationPress} />
        ))}
      </div>
    </section>
  )
}

export default Projects

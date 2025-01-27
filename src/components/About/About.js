// import GitHubIcon from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { SocialIcon } from 'react-social-icons'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>Jesse Etherington.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A Mobile Engineer.</h2>}
      <p className='about__desc'>{description && description}</p>
    </div>
  )
}

export default About

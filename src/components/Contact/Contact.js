import { contact } from '../../portfolio'
import './Contact.css'
import { SocialIcon } from 'react-social-icons'
import { about } from '../../portfolio'

const Contact = () => {
  const { resume, social } = about
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='about__contact center'>
        {resume && (
          <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                 <SocialIcon url='https://github.com/Snergdafer'/>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <SocialIcon url='https://www.linkedin.com/in/jesse-etherington/'/>
              </a>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Contact

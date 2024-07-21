import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
const Footer = () => {
  return (
    <footer className='section footer'>

      <PageLinks pageLinks={pageLinks} parentClass='footer-links' itemClass='footer-link'/>
      <ul className='footer-icons'>
        {socialLinks.map(({ id, href, icon }) => {
          return (

            <SocialLink key={id}  href={href} icon={icon} parentClass='footer-icon' />
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer

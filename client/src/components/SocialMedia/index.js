import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faMedium,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

export const SocialIcons = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <a
          href='https://www.facebook.com/aaveg.nitt/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span />
          <span />
          <span />
          <span />
          <span>
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/aaveg.nitt/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span />
          <span />
          <span />
          <span />
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </a>
      </li>
      <li>
        <a
          href='https://medium.com/aaveg-blog'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span />
          <span />
          <span />
          <span />
          <span>
            <FontAwesomeIcon icon={faMedium} />
          </span>
        </a>
      </li>
      <li>
        <a
          href='https://www.youtube.com/channel/UC6RY84pojMJ0HP6wHkFeW-A'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span />
          <span />
          <span />
          <span />
          <span>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
        </a>
      </li>
    </ul>
  )
}

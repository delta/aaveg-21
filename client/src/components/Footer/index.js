import styles from './style.module.css'
import { troll } from '../../config/config'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        Made with ️
        <div className={styles.heart}>
          <a
            href={troll}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.atag}
          >
            ❤️
          </a>
        </div>{' '}
        by{' '}
        <a
          href='http://delta.nitt.edu'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.atag}
        >
          <span className='heading-font'>Delta Force</span>
        </a>{' '}
        and{' '}
        <a
          href='https://www.behance.net/aavegnitt'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.atag}
        >
          <span className='heading-font'> Aaveg DesCon</span>
        </a>
      </div>
    </footer>
  )
}

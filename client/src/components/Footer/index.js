import styles from './style.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        Made with ️
        <div className={styles.heart}>
          <a
            href='https://bit.ly/3wX2nrZ'
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
          <span>Delta Force</span>
        </a>{' '}
        and{' '}
        <a
          href='https://www.behance.net/aavegnitt'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.atag}
        >
          <span> Aaveg Descon</span>
        </a>
      </div>
    </footer>
  )
}

import React from 'react'
import style from './style.module.css'
import { Button } from '@material-ui/core'
import { useStyles } from './styles'
import { useHistory } from 'react-router'
import bgimg from '../../assets/images/questionPage.png'
import meme from '../../assets/images/404.jpeg'
import { Footer } from '../../components/Footer'
import { SocialIcons } from '../../components/SocialMedia'

export const P404 = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <section className={style.P404}>
      <img src={bgimg} className={style.bgimg} alt='bgimg' />
      <section className={style.section}>
        <main role='main' className={style.main_content}>
          <div className={style.titleCont}>
            <img src={meme} width={300} alt='meme' />
            <br />
            <Button
              variant='contained'
              className={classes.Button}
              color='primary'
              onClick={() => history.push('/')}
            >
              Back to Home Page
            </Button>
          </div>
        </main>
      </section>
      <SocialIcons />
      <Footer />
    </section>
  )
}

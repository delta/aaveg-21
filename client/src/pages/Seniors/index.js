import React from 'react'
import style from './style.module.css'
import { Button } from '@material-ui/core'
import { useStyles } from './styles'
import { useHistory } from 'react-router'
import bgimg from '../../assets/images/questionPage.png'

export const Seniors = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <section className={style.P404}>
      <img src={bgimg} className={style.bgimg} alt='bgimg' />
      <section className={style.section}>
        <main role='main' className={style.main_content}>
          <div className={style.titleCont}>
            <h1 className={style.main_title}>
              Do you wanna check us seniors, no we won't allow aaveg is all ours
              <br />
              <span>go back</span>
              <br />
            </h1>
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
    </section>
  )
}

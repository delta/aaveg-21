import React, { Fragment } from 'react'
import { useStyles } from './styles'
import bgimg from '../../assets/images/stacked-peaks-haikei.png'

export const QuizAttempted = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.wrapper}>
        <img className={classes.bgimg} src={bgimg} alt='background' />
        <div className={classes.main}>
          <div className={classes.sub}>Aaveg 21 Teams</div><br />
          <div className={classes.flash}>COMING SOON</div><br />
          <div className={classes.sub}>You have already filled the questionnaire</div><br />
          <div className={classes.post}>Stay tuned to our handles for the results!</div><br />
        </div>
      </div>
    </>
  )
}

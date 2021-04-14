import React, { Fragment } from 'react'
import { useStyles } from './styles'
import bgimg from '../../assets/images/stacked-peaks-haikei.png'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'

export const QuizAttempted = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <>
      <div className={classes.wrapper}>
        <img className={classes.bgimg} src={bgimg} alt='background' />
        <div className={classes.main}>
          <div className={classes.sub}>Aaveg 21 Teams</div><br />
          <div className={classes.flash}>COMING SOON</div><br />
          <div className={classes.sub}>You have already filled the questionnaire</div><br />
          <div className={classes.post}>Stay tuned to our handles for the results!</div><br />
          <div className={classes.post}>We took your first response but we won't stop from refilling it</div><br /><br />
          <Button className={classes.button} onClick={() => { history.push('/quiz') }}>Click here to fill the questionnaire again</Button>
        </div>
      </div>
    </>
  )
}

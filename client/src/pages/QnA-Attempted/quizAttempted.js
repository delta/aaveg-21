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
          <div className={classes.sub + ' heading-font'}>Aaveg 21 Clans</div><br />
          <div className={classes.flash}>COMING SOON</div><br />
          <div className={classes.sub}>You have already filled the questionnaire</div><br />
          <div className={classes.post}>However, feel free to attempt the questionnaire as many times as you wish. After all, we enjoy redundancy...</div><br />
          <div className={classes.post}>Bear in mind, only your first attempt shall be considered for evaluation</div><br /><br />
          <Button className={classes.button} onClick={() => { history.push('/quiz') }}>Click here to fill the questionnaire again</Button>
        </div>
      </div>
    </>
  )
}

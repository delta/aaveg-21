import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Carousel, { consts } from 'react-elastic-carousel'
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import './carouselStyles.css'
import { useStyles } from './styles'
import logo from '../../assets/images/Aaveg Glyph - Black.png'
import bgimg from '../../assets/images/questionPage.png'
import { BACKEND_API } from '../../config/config'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import { qList } from './utils/qList'

export const QnAPage = () => {
  const history = useHistory()
  const classes = useStyles()
  const [questions, setQues] = useState([])
  const [values, setValues] = useState([])
  const [dialogOpen, setDialogOpen] = useState(true)
  const [loading, setLoading] = useState(true)
  const ref = useRef()

  const carouselSettings = {
    itemPosition: consts.START,
    focusOnSelect: false
  }
  const user = useSelector((state) => state.user)

  if (user.loading === 'idle' && user.isLoggedIn === false) {
    history.push('/login')
  }

  const handleInfoOpen = () => {
    setDialogOpen(true)
  }

  const InfoDialog = ({ open, setOpen }) => {
    const handleClose = () => {
      setOpen(false)
    }

    return (
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <div className={classes.dTitle}>
            Why this questionnaire?
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={classes.dContent}>
              Before you are separated into the different teams that you will compete for in Aaveg, we would like to get to know you a little.
              <br /><br />
              Fill in your answers based on your gut and remember there are no right answers!
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' className={classes.dButton} onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  useEffect(() => {
    // TODO: fetch qIds from backend

    // temporary lists
    const qIdList = ['1', '2', '3', '4', '5', '7']
    const val = new Array(qIdList.length).fill(null)
    setValues(val)
    const ques = []
    qList.forEach(q => {
      if (qIdList.includes(q.qId)) {
        ques.push(q)
      }
    })
    setQues(ques)
    setLoading(false)
  }, [])

  const handleChange = e => {
    const val = e.target.value
    const value = values
    const quesId = questions.findIndex((q) => q.qId === String(parseInt(val.substr(0, 2))))
    value[quesId] = questions[quesId].answers[parseInt(val.substr(2, 1)) - 1].ansId
    setValues([...value])
  }

  const submitHandler = () => {
    console.log(values)

    axios
      .post(BACKEND_API + '/api/quiz/saveAnswers', { questions: values }, { withCredentials: true, credentials: 'include' })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message, {
            position: 'bottom-center'
          })
          history.push('/attempted')
        } else if (res.status === 204) {
          toast.error('You have already filled the form. Here is a surprise.', { position: 'bottom-center' })
          setTimeout(() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 2000)
        } else {
          toast.error(res.data.message, { position: 'bottom-center' })
        }
      })
      .catch((err) => {
        console.log(err)
        if (err.response && err.response.status === 500) {
          toast.error(err.response.data.message, { position: 'bottom-center' })
        } else {
          toast.error('Error Connecting to Server', { position: 'bottom-center' })
        }
      })
  }

  if (loading) {
    return (
      <div>
        Loading
      </div>
    )
  } else {
    return (
      <div className={classes.qna}>
        <div className={classes.toolbar} />
        <img src={bgimg} className={classes.bgimg} alt='bgimg' />
        <div className={classes.main}>
          <InfoIcon color='secondary' onClick={handleInfoOpen} fontSize='large' className={classes.infoIcon} />
          <div className={classes.container}>
            <Carousel {...carouselSettings} ref={ref}>
              {questions.map((q, index) => {
                return (
                  <div key={q.qId}>
                    <div className={classes.cover}>
                      <img src={logo} className={classes.logo} alt='logo' />
                      <FormLabel component='legend' className={classes.legend}>{q.question}</FormLabel>
                      <RadioGroup aria-label='quiz' className={classes.radioGroup} value={values[index]} onChange={handleChange} name='quiz'>
                        {q.answers.map((a, index) => (
                          <FormControlLabel key={index} className={classes.label} value={a.ansId} control={<Radio />} label={a.answer} />
                        ))}
                      </RadioGroup>
                      {index === questions.length - 1 ? <Button variant='contained' color='primary' className={classes.button} disabled={values.findIndex(v => v === null) !== -1} onClick={submitHandler}>Submit</Button> : <Button variant='contained' color='primary' className={classes.button} onClick={() => ref.current.slideNext()}>Next</Button>}
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
          <InfoDialog open={dialogOpen} setOpen={setDialogOpen} />
        </div>
      </div>
    )
  }
}

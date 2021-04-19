import React, { useEffect, useState } from 'react'
import { Grid, Typography, Paper, TextField, Button, InputAdornment } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'
import { BACKEND_API } from '../../config/config'
import toast from 'react-hot-toast'
import { loginSuccess } from '../../actions/user'
import logo from '../../assets/images/aavegwhite.png'
import bgimg from '../../assets/images/loginPage.png'

export const Login = () => {
  const history = useHistory()
  const classes = useStyles()
  const dispatch = useDispatch()

  const [webmail, setWebmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    axios
      .get(BACKEND_API + '/api/auth/info/', { withCredentials: true, credentials: 'include' })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          if (!res.data.isFilled) {
            history.push('/quiz')
          } else {
            history.push('/attempted')
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [history])

  const handleLogin = () => {
    const loginData = {
      email: webmail,
      password: password
    }

    axios
      .post(BACKEND_API + '/api/auth/login/', loginData, { withCredentials: true, credentials: 'include' })
      .then((res) => {
        if (res.status === 200) {
          dispatch(loginSuccess(res.data))
          toast.success('Login Successful')
          if (!res.data.isFilled) {
            history.push('/quiz')
          } else {
            history.push('/attempted')
          }
        } else {
          toast.error(res.message)
        }
      })
      .catch((err) => {
        if (err.response && (err.response.status === 401 || err.response.status === 500 || err.response.status === 400)) {
          toast.error(err.response.data.message)
        } else if (err.response && err.response.status === 404 && err.response.data.message === 'Roll number does not belong to first year or admin') {
          toast.error('Very sneaky. Nice try')
          setTimeout(() => history.push('/seniors'), 2000)
        } else {
          toast.error('Error Connecting to Server')
        }
      })
  }

  return (
    <>
      <img src={bgimg} className={classes.bgimg} alt='bgimg' />
      <Paper elevation={6} className={classes.paper}>
        <Grid
          container
          direction='column'
          alignItems='center'
          justify='space-between'
        >
          <Grid item>
            <img src={logo} alt='logo' width={150} />
          </Grid>
          <Typography variant='h2' color='textPrimary' component='h2' className={classes.title + ' heading-font'}>
            Login
          </Typography>
          <TextField
            label='Webmail ID'
            variant='outlined'
            size='medium'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <AccountCircleIcon />
                </InputAdornment>
              )
            }}
            autoComplete='webamil'
            onChange={(e) => setWebmail(e.target.value)}
            className={classes.TextFields}
          />
          <TextField
            label='Password'
            variant='outlined'
            size='medium'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <LockIcon />
                </InputAdornment>
              )
            }}
            type='password'
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
            className={classes.TextFields}
          />
          <Button
            className={classes.Button}
            variant='contained'
            size='large'
            style={{
              backgroundColor: '#6e946e',
              color: '#ffffff'
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>
      </Paper>
    </>
  )
}

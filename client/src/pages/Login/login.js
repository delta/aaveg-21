import React, { useState } from 'react'
import { Grid, Typography, Paper, TextField, Button, InputAdornment } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import styles from '../Home/style.module.css'
import { useHistory } from 'react-router-dom'
import { useStyles } from './styles'
import { BACKEND_API } from '../../config/config'
import { toast } from 'react-toastify'
import { loginSuccess } from '../../actions/user'
import logo from '../../assets/images/Aaveg Glyph - Black.png'
import bgimg from '../../assets/images/loginPage.png'

export const Login = () => {
  const history = useHistory()
  const classes = useStyles()
  const dispatch = useDispatch()

  const [webmail, setWebmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const loginData = {
      email: webmail,
      password: password
    }

    axios
      .post(BACKEND_API + '/api/auth/login', loginData, { withCredentials: true, credentials: 'include' })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data)
          dispatch(loginSuccess(res.data))
          toast.success(res.data.message, {
            position: 'bottom-center'
          })
          if (!res.data.isFilled) {
            history.push('/quiz')
          } else {
            history.push('/attempted')
          }
        } else {
          toast.error(res.message, { position: 'bottom-center' })
        }
      })
      .catch((err) => {
        // console.log(err)
        if (err.response && (err.response.status === 401 || err.response.status === 500)) {
          toast.error(err.response.data.message, { position: 'bottom-center' })
        } else if (err.response && err.response.status === 404 && err.response.data.message === 'Roll number does not belong to first year or admin') {
          toast.error('does not belong to first year', { position: 'bottom-center' })
          history.push('/seniors')
        } else {
          toast.error('Error Connecting to Server', { position: 'bottom-center' })
        }
      })
  }

  return (
    <>
      <img src={bgimg} className={classes.bgimg && styles.bgimg} alt='bgimg' />
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className={classes.container}
      >
        <Grid container className={classes.vpn} item direction='row' lg={9} md={9} alignItems='center'>
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
              <Typography variant='h2' component='h2' className={classes.title}>
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
                onChange={(e) => setPassword(e.target.value)}
                className={classes.TextFields}
              />
              <Button
                className={classes.Button}
                variant='contained'
                size='large'
                color='primary'
                onClick={handleLogin}
              >
                Login
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

// import styles from './style.module.css'
import React from 'react'
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button
} from '@material-ui/core'
import { useStyles } from './styles.js'
import AavegLogo from '../../assets/images/aaveg.png'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../actions/user'

export const NavBar = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const clickHandle = () => {
    if (user.isAuthenticated === true) {
      dispatch(logout())
    } else {
      history.push('/login')
    }
  }

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar)}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          className={clsx(classes.menuButton)}
        >
          <div onClick={() => { history.push('/') }} className='imgDiv'><img src={AavegLogo} style={{ width: '80px', height: '30px' }} alt='aaveg' id='aaveg' /></div>
        </IconButton>
        <Button key='logout' onClick={clickHandle} color='primary' className={classes.LogButton}>{user.isAuthenticated === true ? 'Logout' : 'Login'}</Button>
      </Toolbar>
    </AppBar>
  )
}

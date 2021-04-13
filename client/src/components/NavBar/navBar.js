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
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/user'

export const NavBar = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

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
          <div className='imgDiv'><img src={AavegLogo} style={{ width: '80px', height: '30px' }} alt='aaveg' id='aaveg' /></div>
        </IconButton>
        <Button key='logout' onClick={() => dispatch(logout())} className={classes.LogButton}>Logout</Button>
      </Toolbar>
    </AppBar>
  )
}

// import styles from './style.module.css'
import React from 'react'
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button
} from '@material-ui/core'
import toast, { Toaster } from 'react-hot-toast'
import { useStyles } from './styles.js'
import AavegLogo from '../../assets/images/aaveg.png'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { logout } from '../../actions/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignOutAlt,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons'

export const NavBar = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const location = useLocation()
  const clickHandle = () => {
    if (user.isAuthenticated === true) {
      dispatch(logout())
      toast.success('Logout Successful')
      history.push('/')
    } else {
      history.push('/login')
    }
  }

  return (
    <>
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
          {location.pathname !== '/login' ? <Button key='logout' onClick={clickHandle} className={classes.LogButton} color='primary'>{user.isAuthenticated === true ? <><FontAwesomeIcon icon={faSignOutAlt} style={{ paddingRight: '5px' }} />Logout</> : <><FontAwesomeIcon icon={faSignInAlt} style={{ paddingRight: '5px' }} /> Login</>}</Button> : null}
        </Toolbar>
      </AppBar>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            background: '#262626',
            color: '#fff'
          },
          iconTheme: {
            secondary: '#262626'
          }
        }}
      />
    </>
  )
}

// import styles from './style.module.css'
import React from 'react'
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  IconButton,
  Button
} from '@material-ui/core'

import { isMobile } from 'react-device-detect'
import { useStyles } from './styles.js'
import AavegLogo from '../../assets/images/aaveg.png'
import { useHistory } from 'react-router-dom'

export const NavBar = (props) => {
  const history = useHistory()
  const classes = useStyles()

  if (!isMobile) {
    return (
    // <div className={classes.root}>
    // <CssBaseline />
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
            <Button key='logout' onClick={() => history.push('/login')} className={classes.LogoButton} />
          </IconButton>
        </Toolbar>
      </AppBar>
    /* <Drawer
        variant="permanent"
        className={clsx(classes.drawerClose)}
        classes={{
          paper: clsx(),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <List className={classes.sideBar}>
        <Item icon={HomeLogo2} name='Home'/>
        <Item icon={EventsLogo2} name='Event'/>
        <Item icon={ScoreLogo2} name='Scores'/>
        <Item icon={SponsorLogo2} name='Sponsor'/>
        </List>
      </Drawer>
        <main className={classes.content}>
          <div className={classes.contentChild}>{props.children}</div>
        </main> */
    // </div>
    )
  }
}

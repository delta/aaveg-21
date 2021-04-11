import React from 'react'
import clsx from 'clsx'
import {
  // Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  // List,
  IconButton
  // BottomNavigation,
  // BottomNavigationAction
} from '@material-ui/core'
import { isMobile } from 'react-device-detect'
import { useStyles } from './styles.js'
// import { useTheme } from '@material-ui/core/styles';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AavegLogo from '../../assets/images/aaveg.png'
// import HomeLogo2 from "../../assets/images/homewhite.png"
// import EventsLogo2 from "../../assets/images/calendarwhite.png"
// import ScoreLogo2 from "../../assets/images/leaderboardwhite.png"
// import SponsorLogo2 from "../../assets/images/sponsorswhite.png"
import './navBar.css'

export const NavBar = (props) => {
  const classes = useStyles()
  // const theme = useTheme();
  // const [value, setValue] = React.useState('recents');

  //  const Item = ({icon,name}) => {
  // return ( <div className={classes.navBar}>
  //     <div className="imgDiv"><img src={icon} style={{width:'20px',height:'20px'}} alt="aaveg" id="aaveg"/></div>
  //     <s2 style={{color:'white'}}>{name}</s2>
  //   </div>);
  // };

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  if (!isMobile) {
    return (
      <div className={classes.root}>
        <CssBaseline />
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
          </Toolbar>
        </AppBar>
        {/* <Drawer
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
      </Drawer> */}
        <main className={classes.content}>
          <div className={classes.contentChild}>{props.children}</div>
        </main>
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <CssBaseline />
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
              <div className='imgDiv'><img src={AavegLogo} style={{ width: '75px', height: '25px' }} alt='aaveg' id='aaveg' /></div>
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.contentChild}>{props.children}</div>
        </main>
        {/* <BottomNavigation value={value} onChange={handleChange} className={classes.bottomBar}>
     <BottomNavigationAction label="Home" value="home" icon={<img src={HomeLogo2} alt="Home Logo" style={{width:'20px',height:'20px'}}/>}/>
      <BottomNavigationAction label="Events" value="events" icon={<img src={EventsLogo2} alt="Event Logo" style={{width:'20px',height:'20px'}}/>} />
      <BottomNavigationAction label="ScoreBoard" value="score" icon={<img src={ScoreLogo2} alt="Score Logo" style={{width:'20px',height:'20px'}}/>} />
      <BottomNavigationAction label="Sponsors" value="sponsor" icon={<img src={SponsorLogo2} alt="Sponsor Logo" style={{width:'20px',height:'20px'}}/>} />
    </BottomNavigation> */}

      </div>
    )
  }
}

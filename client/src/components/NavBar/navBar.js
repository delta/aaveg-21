import React from "react";
import clsx from 'clsx';
import {isMobile} from "react-device-detect";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useStyles} from "./styles.js";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AavegLogo from "../../assets/images/aaveg.png"
import HomeLogo from "../../assets/images/homegray.png"
import EventsLogo from "../../assets/images/calendargray.png"
import ScoreLogo from "../../assets/images/leaderboardgray.png"
import SponsorLogo from "../../assets/images/sponsorsgray.png"
import HomeLogo2 from "../../assets/images/homewhite.png"
import EventsLogo2 from "../../assets/images/calendarwhite.png"
import ScoreLogo2 from "../../assets/images/leaderboardwhite.png"
import SponsorLogo2 from "../../assets/images/sponsorswhite.png"
import "./navBar.css";

const drawerWidth = 220;

export const NavBar =()=>{
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('recents');


   const Item = ({icon,name}) => {
  return ( <div className={classes.navBar}>
      <div className="imgDiv"><img src={icon} style={{width:'20px',height:'20px'}} alt="aaveg" id="aaveg"/></div>
      <s2 style={{color:'white'}}>{name}</s2>
    </div>);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    if(!isMobile)
   {  return (
   <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton)}
          >
           <div className="imgDiv"><img src={AavegLogo} style={{width:'80px',height:'30px'}} alt="aaveg" id="aaveg"/></div>
          </IconButton> 
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawerClose)}
        classes={{
          paper: clsx(),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
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
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>);
  }
    else
  { return(
    <div className={classes.root}>
    <CssBaseline />
    <AppBar
      position="fixed"
      className={clsx(classes.appBar)}
    >
  <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <div className="imgDiv"><img src={AavegLogo} style={{width:'75px',height:'25px'}} alt="aaveg" id="aaveg"/></div>
          </IconButton> 
        </Toolbar>
      </AppBar>
  <BottomNavigation value={value} onChange={handleChange} className={classes.bottomBar}>
     <BottomNavigationAction label="Home" value="home" icon={<img src={HomeLogo2} style={{width:'20px',height:'20px'}}/>}/>
      <BottomNavigationAction label="Events" value="events" icon={<img src={EventsLogo2} style={{width:'20px',height:'20px'}}/>} />
      <BottomNavigationAction label="ScoreBoard" value="score" icon={<img src={ScoreLogo2} style={{width:'20px',height:'20px'}}/>} />
      <BottomNavigationAction label="Sponsors" value="sponsor" icon={<img src={SponsorLogo2} style={{width:'20px',height:'20px'}}/>} />
    </BottomNavigation>
    
    </div>
  );}
}
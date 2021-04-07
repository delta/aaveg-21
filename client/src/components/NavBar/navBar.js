import styles from "./style.module.css";
import React from "react";
import clsx from 'clsx';
import {
Drawer,
AppBar,
Toolbar,
CssBaseline,
List,
IconButton,
BottomNavigation,
BottomNavigationAction,
Divider,
Button
} from '@material-ui/core';
import {
faFacebookF,
faInstagram,
faMedium,
faYoutube,
faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
faHome,
faCalendarAlt,
faSignOutAlt,
faTrophy,
faHandshake
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";
import { useStyles } from "./styles.js";
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AavegLogo from "../../assets/images/aaveg.png"
import AavegIcon from "../../assets/images/aavegwhite.png"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {SocialIcons} from "../SocialMedia/index.js";
import {useHistory} from "react-router-dom";

export const NavBar = (props) => {
let history = useHistory();
const classes = useStyles();
const theme = useTheme();
const [state, setState] = React.useState(false);

const itemList = [
{
"name": "Home",
"icon": faHome,
"url":'/'
},
{
"name": "Events",
"icon": faCalendarAlt,
"url":'/'
},
{
"name": "Scores",
"icon": faTrophy,
"url":'/'
},
{
"name": "Sponsors",
"icon": faHandshake,
"url":'/'
},
{
"name": "Logout",
"icon": faSignOutAlt,
"url":'/login'
},
]
const mediaList = [
{
"name": "Facebook",
"icon": faFacebookF,
"link": "https://www.facebook.com/aaveg.nitt/",
"color": styles.fb
},
{
"name": "Instagram",
"icon": faInstagram,
"link": "https://www.instagram.com/aaveg.nitt/",
"color": styles.ig
},
{
"name": "Medium",
"icon": faMedium,
"link": "https://medium.com/aaveg-blog",
"color": styles.med
},
{
"name": "Youtube",
"icon": faYoutube,
"link": "https://www.youtube.com/channel/UC6RY84pojMJ0HP6wHkFeW-A",
"color": styles.yt
},
// {
// "name": "LinkedIn",
// "icon": faLinkedin,
// "link": "https://www.linkedin.com/company/aavegnitt/",
// "color": styles.lin
// }
]
const [valueBottom, setValueBottom] = React.useState('Home');
const handleBottom = (event, newValue) => {
setValueBottom(newValue);
};
const [value, setValue] = React.useState('Home');
const handleChange = (e,url) => {
if(e==4){setValue("About");}
else{setValue(itemList[e].name);}
history.push(url);
};
const Item = ({index, icon, name,url }) => {
return (
<ListItem key={index} button className={classes.navBar} onClick={()=>{handleChange(index,url)}}>
<div className="imgDiv"><FontAwesomeIcon icon={icon} color={(value === name) ? '#af4fb1' : 'white'} style={{ width: '22px', height: '22px' }} alt="aaveg" id="aaveg" /></div>
<div style={{ color: (value === name) ? '#af4fb1' : 'white', fontSize: "12px" }}>{name}</div>
</ListItem>
);
};

const toggleDrawer = (open) => (event) => {
if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
return;
}
setState(!state);
};

if (!isMobile) {
return (
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
edge="start"
onClick={toggleDrawer("left", true)}
className={clsx(classes.menuButton)}
>
<MenuIcon />
</IconButton>
<img src={AavegLogo} style={{ width: '95px', height: '28px' }} alt="aaveg" id="aaveg" />
<Button key="logout" onClick={()=>history.push("/login")} className={classes.LogoButton}>
<FontAwesomeIcon icon={faSignOutAlt} color="#ff3d3d" style={{ width: '20px', height: '20px',marginRight:"1px" }}/>
<s2 style={{color:"#ff3d3d"}}>Logout</s2>
</Button>
</Toolbar>
</AppBar>
<Drawer classes={{ paper: classes.paper,overflowX:"hidden",overflowY:"hidden"}} anchor="left" variant="temporary" open={state} onClose={toggleDrawer("left", false)}>
<Toolbar>
<IconButton
color="inherit"
aria-label="open drawer"
edge="start"
onClick={toggleDrawer("left", true)}
className={clsx(classes.menuButton)}
>
<MenuIcon />
</IconButton>
<img src={AavegLogo} style={{ width: '95px', height: '28px' }} alt="aaveg" id="aaveg" />
</Toolbar>
<Divider classes={{ root: classes.dividerColor2 }} />
<List classes={classes.paper} style={{overflowY:"auto"}}>
<List>
{itemList.map((item, index) => {
if(index==3){
return(
<div>
<Divider classes={{ root: classes.dividerColor }} />
<ListItem id={index} button key={index} 
style={{background:(value===item.name)?"radial-gradient(circle at 50% 107%,#af4fb1 60%, #7633c4 90%)":null}}
onClick={()=>{handleChange(index,item.url)}} className={styles.indresh} >
<ListItemIcon><FontAwesomeIcon icon={item.icon} color={(value === item.name) ? 'black' : 'white'} style={{ width: '20px', height: '20px' }} /></ListItemIcon>
<ListItemText style={{ color: (value === item.name) ? 'black' : 'white' }} primary={item.name} />
</ListItem>
</div>
);
}else{
return (
<ListItem id={index} button key={index} 
style={{background:(value===item.name)?"radial-gradient(circle at 50% 107%,#964397 60%, #7633c4 90%)":null}}
onClick={()=>{handleChange(index,item.url)}} className={styles.indresh} >
<ListItemIcon><FontAwesomeIcon icon={item.icon} color={(value === item.name) ? 'black' :index==4?'#ff3d3d':'white'} style={{ width: '20px', height: '20px' }} /></ListItemIcon>
<ListItemText style={{ color: (value === item.name) ? 'black' : index==4?'#ff3d3d':'white'}} primary={item.name} />
</ListItem>
);
}
})}
<Divider classes={{ root: classes.dividerColor }} />
</List>
<ListItemText style={{ color: 'lightgray', marginLeft: "22px", marginTop: "20px", marginBottom: "10px" }} primary="FOLLOW US ON" />
{mediaList.map((item, index) => {
return(
<a href={item.link} style={{ textDecoration: "none" }}>
<ListItem className={item.color} button key={index} >
<ListItemIcon><FontAwesomeIcon icon={item.icon} color="white" style={{ width: '20px', height: '20px' }} /></ListItemIcon>
<ListItemText style={{ color: 'white' }} primary={item.name} />
</ListItem>
</a>
);})}
</List>
</Drawer>
<Drawer
classes={{ paper: classes.paper }}
variant="permanent">
<div className={classes.toolbar} />
<List className={classes.sideBar}>
{itemList.map((item, index) => {
if(index==4) return;
return(
<Item index={index} icon={item.icon} name={item.name} url={item.url} />
);
})}
</List>
<div className={classes.toolbar}/>
</Drawer>
<main className={classes.content}>
<div className={classes.contentChild}>{props.children}</div>
</main>
</div>);
}
else {
return (
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
edge="start"
className={clsx(classes.menuButton)}
>
<div className="imgDiv"><img src={AavegLogo} style={{ width: '95px', height: '30.5px' }} alt="aaveg" id="aaveg" /></div>
</IconButton>
<Button key="logout" onClick={()=>history.push("/login")} className={classes.LogoButton}>
<FontAwesomeIcon icon={faSignOutAlt} color="#ff3d3d" style={{ width: '20px', height: '20px',marginRight:"1px" }}/>
</Button>
</Toolbar>
</AppBar>
<main className={classes.content}>
<div className={classes.contentChild}>{props.children}</div>
</main>
<BottomNavigation value={valueBottom} onChange={handleBottom} className={classes.bottomBar}>
{itemList.map((item, index) => {
if(index==4) return;
return(
<BottomNavigationAction style={{color:(valueBottom==item.name)?"blueviolet":"white"}} key={index} label={item.name} value={item.name} icon={<FontAwesomeIcon icon={item.icon} style={{ width: '20px', height: '20px' }} />} />
);
})}
</BottomNavigation>
</div>
);
}
}
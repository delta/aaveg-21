import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 230;

export const useStyles = makeStyles((theme) => ({  
    root: {
        display: 'flex',
      },
      navBar:{
        display: 'flex',
        flexDirection:"column",
        alignItems: 'center',
        marginBottom:20
      },
      bottomBar: {
        display: "flex",
        width:"100%",
        justifyContent: "space-around",
        position: 'fixed', 
        backgroundColor:"rgb(12, 12, 12)",
        color:"rgb(12, 12, 12)",
        bottom: 0, 
      },
      sideBar:{
        display: "flex",
        flexDirection:"column",
        height:"100%",
        paddingTop:20,
        backgroundColor:"rgb(10, 10, 10)"
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor:"black"
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        color:"black",
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      imgDiv: {
        width: 10,
        height:10,
        paddingLeft: "20px",
        padding: "1px",
        backgroundColor: "black"
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    }));

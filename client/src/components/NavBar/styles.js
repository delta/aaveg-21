import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 230

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgb(36, 36, 36)'
  },
  navBar: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    padding: 10,
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1
    }
  },
  paper: {
    backgroundColor: 'rgb(36, 36, 36)'
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly'
  },
  bottomBar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(36, 36, 36)',
    position: 'fixed',
    bottom: 0
  },
  rootBottom: {
    color: 'green',
    '&$selected': {
      color: 'red'
    }
  },
  selected: {},
  sideBar: {
    paddingBlock: 20,
    overflowX: 'hidden',
    width: 'inherit'
  },
  dividerColor: {
    margin: 10,
    backgroundColor: 'rgb(100, 100, 100)'
  },
  dividerColor2: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'rgb(100, 100, 100)'
  },
  appBar: {
    height: '60px',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    background: 'rgb(255 255 255 / 38%)',
    boxShadow: '0 0 12px 10px rgb(0 0 0 / 37%)',
    backdropFilter: 'blur( 15.0px )'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 16,
    padding: 10,
    color: 'white'
  },
  LogButton: {
    padding: 10,
    alignContent: 'center',
    position: 'fixed',
    borderRadius: '5px',
    right: 20,
    color: 'white',
    fontWeight: '600',
    background: '#419ebe',
    '&:hover': {
      background: '#146a8a'
    }
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    },
    color: 'rgb(36, 36, 36)'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  },
  imgDiv: {
    width: 10,
    height: 10
  },
  content: {
    flexGrow: 1
  },
  default: {
    color: 'white'
  },
  onSelected: {
    color: 'blueviolet',
    backgroundColor: '#9523ac62'
  },
  contentChild: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#2f323d',
    overflowY: 'auto'
  }
}))

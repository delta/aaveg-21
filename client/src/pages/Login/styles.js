import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    paddingBottom: '5%',
    paddingTop: '5%',
    position: 'relative',
    margin: '0%',
    left: '9.5%',
    width: '80%',
    [theme.breakpoints.down(400)]: {
      left: '4.5%',
      width: '90%'
    }
  },
  title: {
    margin: theme.spacing(2),
    fontSize: '1.5rem',
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem'
    }
  },
  TextFields: {
    margin: theme.spacing(2),
    fontWeight: 500,
    borderWidth: '1px',
    boxShadow: '0px 1px 10px 1px #00000057',
    [theme.breakpoints.up('md')]: {
      width: '30%'
    }
  },
  Button: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6)
  },
  container: {
    height: 'calc(100% - 100px)',
    margin: theme.spacing(2),
    width: 'auto'
  },
  bgimg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0
  },
  vpn: {
    height: 'calc(100vh - 145px)',
    [theme.breakpoints.down(800)]: {
      height: 'calc(100vh - 120px)'
    }
  }
}))

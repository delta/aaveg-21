import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  paper: {
    // margin: '10%',
    alignItems: 'center',
    // width: '100%',
    background: 'rgba( 255, 255, 255, 0.45 )',
    boxShadow: '0 0 12px 10px rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 10.0px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    paddingBottom: '5%',
    paddingTop: '5%',
    // [theme.breakpoints.down('md')]: {
    position: 'absolute',
    top: '50%',
    margin: '0%',
    left: '9.5%',
    width: '80%',
    transform: 'translateY(-50%)'
    // },
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
    margin: theme.spacing(2),
    width: 'auto'
  },
  bgimg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0
  }
}))

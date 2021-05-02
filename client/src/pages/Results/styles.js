import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  bg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    bottom: '0',
    left: '0',
    textAlign: 'center'
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    fontWeight: 800
  },
  glass: {
    background: 'rgba( 0, 0, 0, 0.45 )',
    backdropFilter: 'blur( 10.0px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    padding: '20px',
    color: 'white',
    position: 'relative',
    top: '-180px',
    [theme.breakpoints.down(1000)]: {
      top: '-130px'
    },
    [theme.breakpoints.down(650)]: {
      top: '-80px'
    }
  },
  clanLogo: {
    width: '800px',
    height: 'auto',
    display: 'block',
    [theme.breakpoints.down(1000)]: {
      width: '600px'
    },
    [theme.breakpoints.down(650)]: {
      width: '90vw',
      height: 'auto'
    }
  },
  title: {
    fontSize: '35px',
    [theme.breakpoints.down(650)]: {
      fontSize: '23px'
    }
  },
  subtitle: {
    fontSize: '23px',
    [theme.breakpoints.down(650)]: {
      fontSize: '13px'
    }
  }
}))

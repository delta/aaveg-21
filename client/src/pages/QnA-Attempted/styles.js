import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  main: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white'
  },
  bgimg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    bottom: '0',
    left: '0',
    zIndex: '0'
  },
  wrapper: {
    position: 'relative',
    width: '100vw',
    minHeight: '100vh'
  },
  flash: {
    fontSize: '5rem',
    fontWeight: '700',
    background: 'linear-gradient(to right,#f7caca 0%, #fcb4b2 10%, #ff9d98 20%, #ff867d 30%, #ff6f61 50%, #ff867d 60%, #ff9d98 70%, #fcb4b2 80%, #f7caca 90%)',
    backgroundSize: '200% auto',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    animation: '$bgchange 3.5s linear infinite',
    textShadow: '0 0 10px #ffffffa5'
  },
  sub: {
    fontSize: '2rem',
    padding: '5px 10px',
    borderRadius: '4px',
    background: '#00000055',
    display: 'inline-block'
  },
  post: {
    fontSize: '1.5rem'
  },
  button: {
    fontSize: 13,
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    background:
      'linear-gradient(to left,rgba(36, 31, 31, 1) 0%,rgba(36, 31, 31, 1) 32%,rgba(74, 71, 70, 1) 100%)',
    boxShadow: '0 3px 5px 2px rgba(255, 235, 235, .8)',
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      margin: theme.spacing(4),
      padding: theme.spacing(2)
    },
    color: 'white'
  },
  '@keyframes bgchange': {
    from: {

    },
    to: {
      backgroundPosition: '200% center'
    }
  }
}))

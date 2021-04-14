import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
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
  '@keyframes bgchange': {
    from: {

    },
    to: {
      backgroundPosition: '200% center'
    }
  }
}))

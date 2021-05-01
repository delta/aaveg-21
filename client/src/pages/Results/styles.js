import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  bg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    bottom: '0',
    left: '0'
  },
  glass: {
    background: 'rgba( 0, 0, 0, 0.45 )',
    backdropFilter: 'blur( 10.0px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px'
  }
}))

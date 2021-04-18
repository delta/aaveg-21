import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  totalDiv: {
    position: 'relative',
    width: '100vw',
    height: 'calc(100vh - 90px)'
  },
  paper: {
    alignItems: 'center',
    paddingBottom: '20px',
    paddingTop: '20px',
    position: 'relative',
    margin: '0%',
    marginTop: '90px',
    marginBottom: '90px',
    left: '9.5%',
    width: '80%',
    background: 'rgba( 0, 0, 0, 0.45 )',
    boxShadow: '0 0 12px 10px rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 10.0px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    [theme.breakpoints.down(400)]: {
      left: '4.5%',
      width: '90%'
    },
    [theme.breakpoints.up(1000)]: {
      left: '14.5%',
      width: '70%'
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
    },
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'blueviolet'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blueviolet'
      }
    }
  },
  Button: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    '.MuiButton-containedPrimary': {
      color: '#fff',
      backgroundColor: '#6e946e'
    }
  },
  bgimg: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0
  }
}))

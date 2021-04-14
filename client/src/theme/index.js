import { createMuiTheme } from '@material-ui/core'

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#954135',
      light: '#6C244C',
      dark: '#241C38',
      contrastText: '#fff'
    },
    secondary: {
      main: '#241C38',
      light: '#54244B',
      dark: '#262626',
      contrastText: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: '#f2f2f2',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#54244B',
      default: '#54244B',
      dimBg: '#262626',
      level2: '#333',
      level1: '#212121'
    }
  }
})

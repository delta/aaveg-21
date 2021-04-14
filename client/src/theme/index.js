import { createMuiTheme } from '@material-ui/core'

export const dark = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#B27823',
      light: '#8C541C',
      dark: '#5C342C',
      contrastText: '#fff'
    },
    secondary: {
      main: '#145DA0',
      light: '#2E8BC0',
      dark: '#2E154A',
      contrastText: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: '#0000',
      disabled: 'rgba(255, 255, 255, 0.5)'
    }
  }
})

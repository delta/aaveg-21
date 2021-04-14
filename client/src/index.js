
import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import store, { persist } from './store'
import { ThemeProvider } from '@material-ui/styles'
import { ToastContainer } from 'react-toastify'
import { NavBar } from './components/NavBar'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { SocialIcons } from './components/SocialMedia'
import { Footer } from './components/Footer'
import { dark } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Routes />
        <ThemeProvider theme={dark}>
          <NavBar />
          <SocialIcons />
          <Footer />
        </ThemeProvider>
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

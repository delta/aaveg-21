import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import store, { persist } from './store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { SocialIcons } from './components/SocialMedia'
import { Footer } from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Routes />
        <SocialIcons />
        <Footer />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

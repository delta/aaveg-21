import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import store, { persist } from './store'
import { Toaster } from 'react-hot-toast'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Routes />
        <Toaster
          position='bottom-right'
          toastOptions={{
            style: {
              background: '#262626',
              color: '#fff'
            },
            iconTheme: {
              secondary: '#262626'
            }
          }}
        />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

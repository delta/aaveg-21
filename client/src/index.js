
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { Routes } from './routes';
import store from './store';
import { persist } from './store';
import { ToastContainer } from 'react-toastify';
import {NavBar} from './components/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <NavBar>
          <Routes />
          <ToastContainer />
        </NavBar>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

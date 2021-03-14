
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { Routes } from './routes';
import store from './store';
import { persist } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

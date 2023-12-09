import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import { store, persistor } from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
  <BrowserRouter>

  <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
  </BrowserRouter>
  </Provider>

);
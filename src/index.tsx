import React from 'react';
import ReactDOM from 'react-dom';
import { setupStore } from './services/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app/app';

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


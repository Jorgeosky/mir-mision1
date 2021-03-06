import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Styles/App.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

reportWebVitals();

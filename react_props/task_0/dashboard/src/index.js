import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App/App';
import  webVitals from 'web-vitals';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

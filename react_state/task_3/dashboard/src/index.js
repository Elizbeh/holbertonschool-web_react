import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { AppContextProvider } from './App/AppContext';  // Import AppContextProvider
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider> {/* Wrap your App component with AppContextProvider */}
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

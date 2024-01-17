import React from 'react';
import './App.css';
import logo from './logo.png';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
       <img src={logo} className='App-logo' alt='Holberton Logo' />
       <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  )
}

export default App;
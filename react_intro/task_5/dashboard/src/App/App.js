import React from 'react';
import '../App/App.css';
import holbertonLogo from '../assets/holberton-logo.png';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
      <div className="App">
        <div className="App-header">
          <img src={holbertonLogo} alt="Holberton logo" />
          <h1>School dashboard</h1>
        </div>
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <div className="App-form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"></input>
                <button type="submit">OK</button>
            </div>
        </div>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
      </div>
  );
}

export default App;
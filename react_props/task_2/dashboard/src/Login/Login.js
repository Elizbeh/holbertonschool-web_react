import React from 'react';
import './Login.css';

function Login () {
  return (
    <div className="App">
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
      </div>
  )
}

export default Login;
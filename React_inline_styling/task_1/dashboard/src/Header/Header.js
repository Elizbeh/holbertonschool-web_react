import React from 'react'
import holbertonLogo from '../assets/holberton-logo.png';
function Header() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
    </div>
  )
}

export default Header;
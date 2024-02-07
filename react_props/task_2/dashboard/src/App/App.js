// App.js
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className='App-header'>
        <Header />
        <div className='App-body'>
          <Login />
        </div>
        <Footer className='App-footer' />
      </div>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

const App = ({ isLoggedIn }) => {
  return (
    <div>
      <Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer/>
    </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;

import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const Header = () => {
  const { user, logOut } = useContext(AppContext);
  return (
    <>
      {user.isLoggedIn && <div id='logOut'>Welcome {user.email} <span onClick={logOut}>(logout)</span></div>}
      <div className={css(styles.header)}>
        <img className={css(styles.image)} src={logo} alt={"Holberton logo"} />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </div>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
  },
  image: {
    width: '200px',
    height: '200px',
  },
  title: {
    color: '#e1484c',
    margin: 'auto auto auto 0',
  },
});

export default Header;
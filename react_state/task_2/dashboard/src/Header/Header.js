import React, { useContext, Component } from 'react';
import logo from '../assets/holberton-logo.png';
import { css } from '@emotion/react';
import AppContext from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <div css={styles.header}>
        <img css={styles.image} src={logo} alt={"Holberton logo"} />
        <h1 css={styles.title}>School dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection">
            Welcome <strong>{user.email}</strong> (
            <a onClick={logOut} css={styles.link}>
              Log out
            </a>
            )
          </p>
        )}
      </div>
    );
  }
}


const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
  },
  title: {
    color: '#e1484c',
    marginLeft: '20px',
  },
  loggedInSection: {
    marginLeft: 'auto',
    marginRight: '20px',
  },
  logoutLink: {
    cursor: 'pointer',
    color: 'blue',
  },
};

export default Header;

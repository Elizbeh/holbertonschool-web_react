import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../Utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  const { user, isLoggedIn } = useContext(AppContext);
  return (
    <>
      <div className={css(styles.footer)}>
        <p className={css(styles.paragraphe)}>Copyright {getFullYear()} - {getFooterCopy()}</p>
        {user.isLoggedIn && <a>Contact us</a>}
      </div>
    </>
  )
}

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    borderTop: '3px solid #e1484c',
    width: '100%',
  },
  paragraphe: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
export default Footer;
import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { css } from '@emotion/react';
import AppContext from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div className={css(styles.footer)}>
      <p className={css(styles.paragraphe)}>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user?.isLoggedIn && (
        <p className={css(styles.paragraphe)}>
          <a href="/contact">contact us</a>
        </p>
      )}
    </div>
  );
};

const styles = {
  footer: {
    bottom: 0,
    borderTop: '3px solid #e1484c',
    width: '100%',
  },
  paragraphe: {
    textAlign: 'center',
    fontStyle: 'italic',
    margin: '5px 0',
  },
};

export default Footer;

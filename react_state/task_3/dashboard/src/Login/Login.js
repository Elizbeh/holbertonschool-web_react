import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { useAppContext } from '../App/AppContext';

const Login = () => {
  const { logIn } = useAppContext();

  const [state, setState] = React.useState({
    email: '',
    password: '',
    enableSubmit: false,
  });

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setState((prevState) => ({
      ...prevState,
      email,
      enableSubmit: validateInputs(email, prevState.password),
    }));
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    setState((prevState) => ({
      ...prevState,
      password,
      enableSubmit: validateInputs(prevState.email, password),
    }));
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (logIn) {
      logIn(state.email, state.password);
    }
  };

  const validateInputs = (email, password) => {
    return (email?.trim() || '') !== '' && (password?.trim() || '') !== '';
  };

  return (
    <div className="App">
      <div className="App-body">
        <p className={css(styles.text)}>Login to access the full dashboard</p>
        <div className={css(styles.form)}>
          <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
            <label className={css(styles.labelAndInput)} htmlFor="email">
              Email:
            </label>
            <input
              className={css(styles.labelAndInput)}
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChangeEmail}
            />
            <label className={css(styles.labelAndInput)} htmlFor="password">
              Password:
            </label>
            <input
              className={css(styles.labelAndInput)}
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChangePassword}
            />
            <input
              className={css(styles.button, state.enableSubmit ? styles.enable : styles.disable)}
              type="submit"
              value="OK"
              disabled={!state.enableSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  text: {
    margin: '3rem 0 0 2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem 0 0 2rem',
  },
  labelAndInput: {
    margin: '0 1rem 0 0',
  },
  button: {
    width: '40px',
    color: 'black',
    backgroundColor: 'white',
    border: '3px solid gold',
    borderRadius: '2px',
  },
  enable: {
    backgroundColor: 'green',
    cursor: 'pointer',
  },
  disable: {
    backgroundColor: 'grey',
    cursor: 'not-allowed',
  },
};

export default Login;

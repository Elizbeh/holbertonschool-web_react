import React from 'react';
import { css } from '@emotion/react';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
      isLoggedIn: false,
    };
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value,
    enableSubmit: this.validateInputs(event.target.value, this.state.password),
    });
  };

  handleChangePassword = (event) => {
    this.setState({
    password: event.target.value,
    enableSubmit: this.validateInputs(event.email, event.target.value),
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.setState({isLoggedIn: true});
  };

  validateInputs = (email, password) => {
    return (email?.trim() || '') !== '' && (password?.trim() || '') !=='';
  };

  render() {
    const {email, password, enableSubmit, isLoggedIn} = this.state;
  
  return (
    <div className="App">
        <div className="App-body">
            <p className={css(styles.text)}>Login to access the full dashboard</p>
            <div className={css(styles.form)}>
              <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
              <label className={css(styles.labelAndInput)} htmlFor={"email"}>Email:</label>
              <input className={css(styles.labelAndInput)} 
                type={"email"} 
                id={"email"} 
                name={"email"} 
                value={email}
                onChange={this.handleChangeEmail}>
              </input>
              <label className={css(styles.labelAndInput)} htmlFor={"password"}>Password:</label>
              <input className={css(styles.labelAndInput)}
               type={"password"} 
               id={"password"} 
               name={"password"}
               value={password}
               onChange={this.handleChangePassword}>
              </input>
              <input className={css(styles.button, enableSubmit ? styles.enable : styles.disable)}
               type={"submit"}
               value="OK"
               disabled={!enableSubmit} />
              </form>
            </div>
        </div>
      </div>
  )};
}

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
    width : '40px',
    color: 'black',
    backgroundColor:'white',
    border: '3px solid  gold',
    borderRadius: '2px'
  },
  enable: {
    backgroundColor: 'green',
    cursor: 'pointer'
  },
  disable: {
    backgroundColor: 'grey',
    cursor: 'not-allowed'
  },
};

export default Login;
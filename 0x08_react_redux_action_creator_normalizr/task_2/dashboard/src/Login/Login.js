import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.email !== this.state.email ||
      prevState.password !== this.state.password) {
      const displayButton = this.state.email.length > 0 && this.state.password.length > 0;
      this.setState({
        enableSubmit: displayButton,
      });
    }
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <>
        <p className={css(styles.text)}>Login to access the full dashboard</p>
        <form onSubmit={(event) => this.handleLoginSubmit(event)}>
          <div className={css(styles.form)}>
            <label className={css(styles.labelAndInput)} htmlFor={"email"}>Email:</label>
            <input className={css(styles.labelAndInput)} type={"email"} id={"email"} name={"email"} value={this.state.email} onChange={(event) => this.handleChangeEmail(event)}></input>
            <label className={css(styles.labelAndInput)} htmlFor={"password"}>Password:</label>
            <input className={css(styles.labelAndInput)} type={"password"} id={"password"} name={"password"} value={this.state.password} onChange={(event) => this.handleChangePassword(event)}></input>
          </div>
          <input type={"submit"} value={'ok'} disabled={!this.state.enableSubmit}></input>
        </form >
      </>
    );
  }
}
const styles = StyleSheet.create({
  text: {
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  labelAndInput: {
    margin: '0 1rem 0 0',
  },
});

export default Login;
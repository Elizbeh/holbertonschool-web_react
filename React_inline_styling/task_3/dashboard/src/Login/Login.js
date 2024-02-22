import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Login () {
  return (
    <div className="App">
        <div className="App-body">
            <p className={css(styles.text)}>Login to access the full dashboard</p>
            <div className={css(styles.form)}>
              <label className={css(styles.labelAndInput)} htmlFor={"email"}>Email:</label>
              <input className={css(styles.labelAndInput)} type={"email"} id={"email"} name={"email"}></input>
              <label className={css(styles.labelAndInput)} htmlFor={"password"}>Password:</label>
              <input className={css(styles.labelAndInput)} type={"password"} id={"password"} name={"password"}></input>
              <button className={css(styles.button)} type={"submit"}>OK</button>
            </div>
        </div>
      </div>
  )
}

const styles = StyleSheet.create({
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
    padding:'10px 20px',
    color: 'black',
    backgroundColor:'white',
    border: '3px solid  gold',
    borderRadius: '2px'
  }
});

export default Login;
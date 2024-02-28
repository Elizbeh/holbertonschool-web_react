import React, { Component } from "react";
import { AppContextProvider } from "./AppContext";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from '../Footer/Footer';
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  render() {
    const { user } = this.state;

    return (
      <AppContextProvider value={{ user, logOut: this.logOut }}>
        <div className="App">
          <Notifications />
          <Header />
          {user.isLoggedIn ? (
            <CourseList />
          ) : (
            <Login logIn={this.logIn} />
          )}
        </div>
      </AppContextProvider>
    );
  }
}

export default App;
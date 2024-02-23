import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import { PropTypes } from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from 'aphrodite';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      logOut: this.props.logOut,
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ],
      displayDrawer: false,
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { logOut } = this.state;
    if (event.key === 'h' && (event.ctrlKey || event.metaKey)) {
      alert('Logging you out');
      logOut();
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  }
  handleDisplayerDrawer = () => {
    this.setState ({displayDrawer: true,
    });
  }

  handleHideDrawer = () => {
    this.setState({handleHideDrawer: false,
    });
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications, displayDrawer } = this.state;

    return (
      <>
        <Notifications listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayerDrawer={this.handleDisplayerDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className="App">
          <Header />
          <div className={css(styles.body)}>
            {isLoggedIn ?
              <BodySectionWithMarginBottom title={'Course list'}>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom> :
              <BodySectionWithMarginBottom title={'Log in to continue'}>
                <Login onLogin={this.handleLogin} />
              </BodySectionWithMarginBottom>}
            <BodySection title={'News from the School'}>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, adipisci? Lorem ipsum dolor, sit amet consectetur</p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderTop: '3px solid #e1484c',
  },
});


App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;

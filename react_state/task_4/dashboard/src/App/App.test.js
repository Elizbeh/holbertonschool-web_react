import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { AppContextProvider } from './AppContext';


describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AppContextProvider>
        <App />
      </AppContextProvider>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders CourseList when user is logged in', () => {
    const appComponent = wrapper.find('App').dive();
    appComponent.find('App').instance().setState({
      user: {
        email: 'test@example.com',
        password: 'password',
        isLoggedIn: true,
      },
    });
    expect(appComponent.find('CourseList').exists()).toBe(true);
  });

  it('renders Login when the user is not logged in', () => {
    const appComponent = wrapper.find('App').dive(); // Dive into the App component
    expect(appComponent.find('Login').exists()).toBe(true);
  });


  it('calls logIn function when logging in', () => {
    const logInMock = jest.fn();
    const contextValue = { user: { email: '', password: '', isLoggedIn: false }, logIn: logInMock, logOut: jest.fn() };

    const wrapper = shallow(
      <AppContextProvider value={contextValue}>
        <App />
      </AppContextProvider>
    );
  });

  it('calls logOut function when logging out', () => {
    const logOutMock = jest.fn();
    const contextValue = { user: { email: 'test@example.com', password: 'password123', isLoggedIn: true }, logIn: jest.fn(), logOut: logOutMock };

    const wrapper = shallow(
      <AppContextProvider value={contextValue}>
        <App />
      </AppContextProvider>
    );
  });

  it('should set initial notifications in state', () => {
    const appComponent = wrapper.find('App').dive();
    expect(appComponent.state('listNotifications')).toEqual([
      { id: 1, type: 'default', value: getLatestNotification() },
      { id: 2, type: 'urgent', value: 'Your subscription is about to expire!' },
      { id: 3, type: 'info', value: 'New feature added: Dark mode!' },
    ]);
  });
  
  it('should set initial notifications in state', () => {
    const appComponent = wrapper.find('App').dive();
    expect(appComponent.state('listNotifications')).toEqual([
      { id: 1, type: 'default', value: getLatestNotification() },
      { id: 2, type: 'urgent', value: 'Your subscription is about to expire!' },
      { id: 3, type: 'info', value: 'New feature added: Dark mode!' },
    ]);
  });
})
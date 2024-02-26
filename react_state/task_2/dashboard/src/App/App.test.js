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
    const appComponent = wrapper.find('App').dive();  // Find the App component instance
    appComponent.setState({
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

    // ... (unchanged code)
  });

  it('calls logOut function when logging out', () => {
    const logOutMock = jest.fn();
    const contextValue = { user: { email: 'test@example.com', password: 'password123', isLoggedIn: true }, logIn: jest.fn(), logOut: logOutMock };

    const wrapper = shallow(
      <AppContextProvider value={contextValue}>
        <App />
      </AppContextProvider>
    );

    // ... (unchanged code)
  });
});

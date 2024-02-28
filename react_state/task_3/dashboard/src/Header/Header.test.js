import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { AppContextProvider } from '../App/AppContext';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <AppContextProvider>
        <Header />
      </AppContextProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('does not render logoutSection with default context value', () => {
    const wrapper = shallow(
      <AppContextProvider>
        <Header />
      </AppContextProvider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('renders logoutSection with user-defined context value', () => {
    const user = { email: 'test@example.com', password: 'password123', isLoggedIn: true };
    const contextValue = { user, logIn: jest.fn(), logOut: jest.fn() };

    const wrapper = shallow(
      <AppContextProvider value={contextValue}>
        <Header />
      </AppContextProvider>
    );

    
    console.log(wrapper.debug()); 
    console.log(wrapper.html());
    console.log(wrapper.find('p#logoutSection').length);
    console.log(wrapper.text());
    console.log(wrapper.find('Header').state());

    expect(wrapper.find('p#logoutSection').exists()).toBe(true);
  });
});

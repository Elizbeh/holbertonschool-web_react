import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('displays contact us link when user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };

    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    const anchorElement = wrapper.find('a');

    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('does not display contact us link when user is logged out', () => {
    const contextValue = { user: { isLoggedIn: false } };

    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    console.log(wrapper.debug());
    
    console.log(wrapper.html());
      
    expect(wrapper.find('a').exists()).toBe(false);
    });
});

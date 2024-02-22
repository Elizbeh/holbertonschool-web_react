import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  // Mock console.log before each test
  beforeEach(() => {
    console.log = jest.fn();
  });

  // Test when the wrapped element is pure HTML
  it('should log mount and unmount messages with "Component" for pure HTML', () => {
    const WrappedComponent = () => <div>Hello World</div>;
    const WithLoggingComponent = WithLogging(WrappedComponent);
    const wrapper = shallow(<WithLoggingComponent />);

    // Check if console.log was called with mount message
    expect(console.log).toHaveBeenCalledWith('Component WithLoggingComponent is mounted');

    wrapper.unmount();

    // Check if console.log was called with unmount message
    expect(console.log).toHaveBeenCalledWith('Component WithLoggingComponent is going to unmount');
  });

  // Test when the wrapped element is the Login component
  it('should log mount and unmount messages with the component name for Login component', () => {
    const Login = () => <div>Login Component</div>;
    const WithLoggingLogin = WithLogging(Login);
    const wrapper = shallow(<WithLoggingLogin />);

    // Check if console.log was called with mount message containing component name
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();

    // Check if console.log was called with unmount message containing component name
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});

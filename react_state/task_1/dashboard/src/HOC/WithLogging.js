import React, { Component } from 'react';

const WithLogging = (WrappedComponent, componentName = 'Component') => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Set the displayName for debugging when the component is created
  WithLoggingComponent.displayName = `WithLogging(${componentName})`;

  // Move getComponentName outside of the component's methods
  const getComponentName = () => componentName;

  // Attach getComponentName as a static method
  WithLoggingComponent.getComponentName = getComponentName;

  return WithLoggingComponent;
};

export default WithLogging;

import React from 'react';
import { shallow } from 'enzyme';

import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.exists('h2')).toBe(true);
    expect(wrapper.find('h2').text()).toBe('test title');
    expect(wrapper.exists('p')).toBe(true);
    expect(wrapper.find('p').text()).toBe('test children node')
  });
});
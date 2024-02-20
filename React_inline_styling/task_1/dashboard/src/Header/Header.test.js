import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';

import { StyleSheetTestUtils } from 'aphrodite';

// ...

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});


describe('Header component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  it('Renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  })
})

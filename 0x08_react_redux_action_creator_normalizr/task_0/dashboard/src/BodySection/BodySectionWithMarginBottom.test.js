import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('BodySectionWithMarginBottom Component', () => {
  it('renders a BodySection component with correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.exists(BodySection)).toBe(true);

    const bodySection = wrapper.find(BodySection);
    expect(bodySection.prop('title')).toBe('test title');
    expect(bodySection.prop('children')).toEqual(<p>test children node</p>);
  });

  it('applies CSS styles correctly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);
    expect(wrapper.hasClass('bodySectionWithMargin')).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from '../CourseList/CourseListRow';


describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header 1"
        textSecondCell="Header 2"
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />
    );
    expect(wrapper.find('tr').children('td')).toHaveLength(2);
  });
});

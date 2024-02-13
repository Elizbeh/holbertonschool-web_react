// CourseList/CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import CourseListRow from '../CourseList/CourseListRow';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});

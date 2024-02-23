import React from 'react';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import CourseListRow from '../CourseList/CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';


beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('renders CourseList component with an empty listCourses prop', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders "No course available yet" when listCourses prop is empty', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.text()).toContain('No course available yet');
  });

  it('renders CourseList component with a non-empty listCourses prop', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.exists()).toBe(true);
  });
});

jest.mock('../assets/holberton-logo.png', () => 'holberton-logo.png');

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});


test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

test('App renders a div with the class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').exists()).toBe(true);
});

test('App renders a div with the class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body').exists()).toBe(true);
});

test('App renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer').exists()).toBe(true);
});

test('App contains the Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Notifications)).toHaveLength(1);
});

test('App contains the Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Header)).toHaveLength(1);
});

test('App contains the Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Login)).toHaveLength(1);
});

test('App contains the Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer)).toHaveLength(1);
});

test('CourseList component is not displayed by default', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CourseList).exists()).toBe(false);
});

test('CourseList component is displayed when isLoggedIn is true', () => {
  const wrapper = shallow(<App isLoggedIn={true} />);
  expect(wrapper.find(CourseList).exists()).toBe(true);
});

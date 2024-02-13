import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});

test('Notifications renders three NotificationItem elements', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('NotificationItem')).toHaveLength(3);
});

test('Notifications renders the text "Here is the list of notifications"', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.text()).toContain('Here is the list of notifications');
});

test('Notifications renders "No new notification for now" when listNotifications prop is empty', () => {
  const wrapper = shallow(<Notifications listNotifications={[]} />);
  expect(wrapper.text()).toContain('No new notification for now');
});

test('Notifications renders listNotifications correctly', () => {
  const listNotifications = [
    { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'New course available' },
    { id: 2, html: { __html: 'Notification 2' }, type: 'urgent', value: 'Urgent requirement' },
    { id: 3, html: { __html: 'Notification 3' }, type: 'default', value: 'Another notification' },
  ];
  const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
  expect(wrapper.find('NotificationItem')).toHaveLength(3);
});
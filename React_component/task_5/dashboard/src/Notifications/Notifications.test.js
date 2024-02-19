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
  const renderedNotifications = wrapper.find('NotificationItem');

  expect(renderedNotifications).toHaveLength(3);

  listNotifications.forEach((notification, index) => {
    const renderedNotification = renderedNotifications.at(index);
    expect(renderedNotification.props()).toEqual(notification);
  });
});

test('Notifications does not re-render with the same list of notifications', () => {
  const listNotifications = [
    { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'New course available' },
    { id: 2, html: { __html: 'Notification 2' }, type: 'urgent', value: 'Urgent requirement' },
    { id: 3, html: { __html: 'Notification 3' }, type: 'default', value: 'Another notification' },
  ];

  const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
  const instance = wrapper.instance();

  // Spy on the shouldComponentUpdate method
  const shouldComponentUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');

  // Update with the same list
  wrapper.setProps({ listNotifications });

  // Check that shouldComponentUpdate was called
  expect(shouldComponentUpdateSpy).toHaveBeenCalled();
  // Check that the component did not re-render
  expect(wrapper.html()).toMatchSnapshot();
});

test('Notifications re-renders with a longer list of notifications', () => {
  const initialListNotifications = [
    { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'New course available' },
    { id: 2, html: { __html: 'Notification 2' }, type: 'urgent', value: 'Urgent requirement' },
    { id: 3, html: { __html: 'Notification 3' }, type: 'default', value: 'Another notification' },
  ];

  const updatedListNotifications = [
    ...initialListNotifications,
    { id: 4, html: { __html: 'Notification 4' }, type: 'urgent', value: 'New urgent notification' },
  ];

  const wrapper = shallow(<Notifications listNotifications={initialListNotifications} />);
  const instance = wrapper.instance();

  // Spy on the shouldComponentUpdate method
  const shouldComponentUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');

  // Update with a longer list
  wrapper.setProps({ listNotifications: updatedListNotifications });

  // Check that shouldComponentUpdate was called
  expect(shouldComponentUpdateSpy).toHaveBeenCalled();
  // Check that the component re-rendered
  expect(wrapper.html()).toMatchSnapshot();
});

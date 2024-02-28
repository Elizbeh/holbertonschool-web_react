import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from '../Notifications/NotificationItem';

describe('Notifications Component', () => {
  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render a list of NotificationItems when passed in the listNotifications prop', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available', html: null },
      { id: 2, type: 'urgent', value: 'New resume available', html: null },
    ];

    const wrapper = shallow(<Notifications listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
  });

  it('should not render any NotificationItem when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(0);
  });

  it('should call markNotificationAsRead when markAsRead is called on a NotificationItem', () => {
    const markNotificationAsReadMock = jest.fn();
    const notifications = [{ id: 1, type: 'default', value: 'New course available', html: null }];
    const wrapper = shallow(
      <Notifications listNotifications={notifications} markNotificationAsRead={markNotificationAsReadMock} />
    );

    wrapper.find(NotificationItem).prop('markAsRead')(1);
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });

  it('should not display the menu item if displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).toHaveLength(0);
  });

  it('should display the menu item if displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('should call console.log when the close button is clicked', () => {
    console.log = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.find('button[aria-label="Close"]').simulate('click');
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked\n');
  });
});

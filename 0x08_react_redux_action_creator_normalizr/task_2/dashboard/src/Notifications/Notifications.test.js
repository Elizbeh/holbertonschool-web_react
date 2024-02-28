import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

describe('NotificationItem component tests', () => {

  it('renders NotificationItem component without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders type and value props', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test" />);
    const liItem = wrapper.find('li');
    expect(liItem).toHaveLength(1);
    expect(liItem.prop('data-notification-type')).toEqual('urgent');
    expect(liItem.text()).toEqual('test');
  });

  it('renders html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const liItem = wrapper.find('li');
    expect(liItem).toHaveLength(1);
  });

  it('clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications
      displayDrawer={false}
      listNotifications={[]}
      handleDisplayDrawer={handleDisplayDrawer}
      handleHideDrawer={() => { }} />);
    wrapper.find('.menuItem_9n6xa').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  })
});
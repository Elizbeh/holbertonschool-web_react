import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct HTML for type and value props', () => {
    const wrapper = shallow(
      <NotificationItem type="dummyType" value="dummyValue" />
    );
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('dummyType');
    expect(wrapper.text()).toContain('dummyValue');
  });

  it('renders the correct HTML for the html prop', () => {
    const dummyHtml = { __html: '<u>test</u>' };
    const wrapper = shallow(
      <NotificationItem type="dummyType" html={dummyHtml} />
    );
    expect(wrapper.find('li').html()).toContain(dummyHtml.__html);
  });

  it('calls markAsRead when li element is clicked', () => {
    const dummyId = 123;
    const markAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem type="dummyType" value="dummyValue" markAsRead={markAsRead} id={dummyId} />
    );

    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(dummyId);
  });
});

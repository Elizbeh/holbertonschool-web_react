import { bindActionCreators } from 'redux';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from './notificationActionTypes';


export const markAsRead = (index) => ({
  type:  notificationActionTypes.MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: notificationActionTypes.SET_TYPE_FILTER,
  filter,
});
import { fromJS } from 'immutable';
import { normalizedNotifications, notificationSchema } from '../schema/notifications';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';

const initialState = fromJS({
  filter: 'DEFAULT',
  notifications: normalizedNotifications.entities.notifications,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeepIn(['notifications'], normalizedNotifications.entities.notifications);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);

    default:
      return state;
  }
};

export default notificationReducer;

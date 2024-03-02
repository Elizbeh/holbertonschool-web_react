import notificationReducer from './notificationReducer';
import { fromJS } from 'immutable';
import { normalizedNotifications } from '../schema/notifications';

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [],
    };

    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });
  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const prevState = fromJS({
      filter: 'DEFAULT',
      notifications: [],
    });
  
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
      ],
    };
  
    console.log('normalizedNotifications:', normalizedNotifications);
    
    const state = notificationReducer(prevState, action);
    console.log('state after FETCH_NOTIFICATIONS_SUCCESS:', state.toJS());
  });

  it('should handle MARK_AS_READ action', () => {
    const prevState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false,
        },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      index: 1,
    };

    const state = notificationReducer(prevState, action);
    expect(state.notifications[1].isRead).toBe(true);
  });

  it('should handle SET_TYPE_FILTER action', () => {
    const prevState = {
      filter: 'DEFAULT',
      notifications: [],
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const state = notificationReducer(prevState, action);
    expect(state.filter).toBe('URGENT');
  });
});

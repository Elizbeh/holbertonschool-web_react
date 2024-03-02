import notificationReducer from './notificationReducer';
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
    const prevState = {
      filter: 'DEFAULT',
      notifications: [],
    };
  
    const action = {
      type: 'FETCH_NOTIFICATIONS_SUCCESS',
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
      ],
    };
  
    const state = notificationReducer(prevState, action);
    expect(state.notifications).toHaveLength(1);
  });
  
})
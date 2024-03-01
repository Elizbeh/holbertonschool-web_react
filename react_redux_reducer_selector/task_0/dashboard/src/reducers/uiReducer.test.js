import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const prevState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(prevState, action);

    expect(state.isNotificationDrawerVisible).toBe(true);
    expect(state.isUserLoggedIn).toBe(false);
    expect(state.user).toEqual({});
  });

  it('should handle HIDE_NOTIFICATION_DRAWER action', () => {
    const prevState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const state = uiReducer(prevState, action);

    expect(state.isNotificationDrawerVisible).toBe(false);
    // Check other properties to ensure they remain unchanged
    expect(state.isUserLoggedIn).toBe(false);
    expect(state.user).toEqual({});
  });

  it('should handle LOGIN_SUCCESS action', () => {
    const prevState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = { type: LOGIN_SUCCESS };
    const state = uiReducer(prevState, action);

    expect(state.isUserLoggedIn).toBe(true);
    // Check other properties to ensure they remain unchanged
    expect(state.isNotificationDrawerVisible).toBe(false);
    expect(state.user).toEqual({});
  });

  it('should handle LOGIN_FAILURE action', () => {
    const prevState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };

    const action = { type: LOGIN_FAILURE };
    const state = uiReducer(prevState, action);

    expect(state.isUserLoggedIn).toBe(false);
    // Check other properties to ensure they remain unchanged
    expect(state.isNotificationDrawerVisible).toBe(false);
    expect(state.user).toEqual({});
  });

  it('should handle LOGOUT action', () => {
    const prevState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };

    const action = { type: LOGOUT };
    const state = uiReducer(prevState, action);

    expect(state.isUserLoggedIn).toBe(false);
    // Check other properties to ensure they remain unchanged
    expect(state.isNotificationDrawerVisible).toBe(false);
    expect(state.user).toEqual({});
  });
});

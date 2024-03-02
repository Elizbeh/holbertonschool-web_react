import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });

    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const prevState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });

    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(prevState, action);

    expect(state.get('isNotificationDrawerVisible')).toBe(true);
    // Check other properties to ensure they remain unchanged
    expect(state.get('isUserLoggedIn')).toBe(false);
    expect(state.get('user')).toEqual(Map({}));
  });

  it('should handle HIDE_NOTIFICATION_DRAWER action', () => {
    const prevState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({}),
    });

    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const state = uiReducer(prevState, action);

    expect(state.get('isNotificationDrawerVisible')).toBe(false);
    // Check other properties to ensure they remain unchanged
    expect(state.get('isUserLoggedIn')).toBe(false);
    expect(state.get('user')).toEqual(Map({}));
  });

  it('should handle LOGIN_SUCCESS action', () => {
    const prevState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({}),
    });

    const action = { type: LOGIN_SUCCESS };
    const state = uiReducer(prevState, action);

    expect(state.get('isUserLoggedIn')).toBe(true);
    // Check other properties to ensure they remain unchanged
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
    expect(state.get('user')).toEqual(Map({}));
  });

  it('should handle LOGIN_FAILURE action', () => {
    const prevState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({}),
    });

    const action = { type: LOGIN_FAILURE };
    const state = uiReducer(prevState, action);

    expect(state.get('isUserLoggedIn')).toBe(false);
    // Check other properties to ensure they remain unchanged
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
    expect(state.get('user')).toEqual(Map({}));
  });

  it('should handle LOGOUT action', () => {
    const prevState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({}),
    });

    const action = { type: LOGOUT };
    const state = uiReducer(prevState, action);

    expect(state.get('isUserLoggedIn')).toBe(false);
    // Check other properties to ensure they remain unchanged
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
    expect(state.get('user')).toEqual(Map({}));
  });
});

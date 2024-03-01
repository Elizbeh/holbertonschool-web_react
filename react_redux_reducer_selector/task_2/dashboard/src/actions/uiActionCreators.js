// uiActionCreators.js
import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => (dispatch) => {
  dispatch(login(email, password));

  fetch('/login-success.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Api request failed');
      }
      return response.json();
    })
    .then((data) => {
      dispatch(loginSuccess());
    })
    .catch((error) => {
      dispatch(loginFailure());
    });
};

// Binding action creators using bindActionCreators
export const boundUIActionCreators = bindActionCreators(
  {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  },
  dispatch
);

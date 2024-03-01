import { bindActionCreators } from 'redux';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const login = (email, password) => ({
  type: uiActionTypes.LOGIN,
  user: {email, password}
});

export const logout = () => ({
  type: uiActionTypes.LOGOUT,
});

export const displayNotificationDrawer = () =>({
  type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER,
});
export const hideNotificationDrawer = () => ({
  type: uiActionTypes.HIDE_NOTIFICATION_DRAWER,
})

export const boundUIActionCreators = bindActionCreators(
  {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  })
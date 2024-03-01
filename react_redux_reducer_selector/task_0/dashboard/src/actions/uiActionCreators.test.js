// uiActionCreators.test.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to login', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('should create an action to display notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('should create an action to hide notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

  it('should create an action for login success', () => {
    const expectedAction = {
      type: LOGIN_SUCCESS,
    };
    expect(loginSuccess()).toEqual(expectedAction);
  });

  it('should create an action for login failure', () => {
    const expectedAction = {
      type: LOGIN_FAILURE,
    };
    expect(loginFailure()).toEqual(expectedAction);
  });

  it('should dispatch loginSuccess after successful API request', () => {
    fetchMock.getOnce('/login-success.json', { body: {} });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch loginFailure after failed API request', () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

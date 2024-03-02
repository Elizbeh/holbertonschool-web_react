const initialState = {
  filter: 'DEFAULT',
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NOTIFICATIONS_SUCCESS':
    const updatedNotifications = action.data.map(notification => ({
    ...notification,
    isRead: false,
  }));

  return {
    ...state,
    notifications: updatedNotifications,
  };
    case 'MARK_AS_READ':
  const { index } = action;
  const markedNotifications = state.notifications.map((notification, i) => ({
    ...notification,
    isRead: i === index ? true : notification.isRead,
  }));

  return {
    ...state,
    notifications: markedNotifications,
  };
case 'SET_TYPE_FILTER':
  return {
    ...state,
    filter: action.filter,
  };
    default:
      return state;
  }
};

export default notificationReducer;

// Notifications.js
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from '../Notifications/NotificationItem';
import { getLatestNotification } from '../utils/utils';
import WithLogging from '../HOC/WithLogging';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the length of the new listNotifications is longer than the current one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className={css(styles.container)}>
        <div className={`${css(styles.menuItem)}${displayDrawer ? ` ${css(styles.displayMenuItem)}` : ''}`}>
          Your notifications
        </div>
        <div className={`${css(styles.Notifications)}${displayDrawer ? ` ${css(styles.displayDrawer)}` : ''}`}>
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={() => {
              console.log('Close button has been clicked\n');
            }}
          >
            x
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={this.markAsRead}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // Add your container styles here
  },
  menuItem: {
    // Add your menuItem styles here
  },
  displayMenuItem: {
    // Add your displayMenuItem styles here
  },
  Notifications: {
    // Add your Notifications styles here
  },
  displayDrawer: {
    // Add your displayDrawer styles here
  },
  closeButton: {
    // Add your closeButton styles here
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default WithLogging(Notifications, 'Notifications');

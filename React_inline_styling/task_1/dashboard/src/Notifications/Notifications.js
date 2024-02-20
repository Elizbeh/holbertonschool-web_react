import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {StyleSheet,css} from 'aphrodite'
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
      <div className='container'>
        <div className={css(styles.menuItem)}>
          Your notifications
        </div>
        <div className={css(styles.notifications)}>
          <button
            style={{
              position: 'absolute',
              right: '16px',
              top: '.8rem',
              fontSize: '16px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
            }}
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
  notifications: {
    border: '2px dotted #e1484c',
    padding: '1rem .5rem 0 .5rem',
    float: 'right',
  },
  menuItem: {
    textAlign: 'right',
  }

});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};


Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default WithLogging(Notifications, 'Notifications');

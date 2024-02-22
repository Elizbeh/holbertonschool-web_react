import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';  // Make sure to import StyleSheet and css
import NotificationItem from '../Notifications/NotificationItem';
import NotificationItemShape from './NotificationItemShape';
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
        {displayDrawer && (
          <div className={css(styles.notifications, styles.small)}>
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
            <ul className={css(styles.ul)}>
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
        )}
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
  },
  small: {
    '@media (max-width: 900px)': {
      position: "fixed",
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      fontSize: '20px',
      backgroundColor: 'white',
      overflow: 'hidden',
    },
    ul: {
      '@media (max-width: 900px)': {
        listStylePosition: 'inside',
      }
    }
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

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from '../Notifications/NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import WithLogging from '../HOC/WithLogging';

class Notifications extends PureComponent {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    this.props.markNotificationAsRead(id);
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className='container'>
        <div className={css(styles.menuItem, styles.opacityAnim, styles.bounceAnim)}>
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

const opacity = {
  'from': {
    opacity: 0,
  },
  'to': {
    opacity: 0.5,
  },
};

const bounce = {
  '70%': {
    transform: 'translateY(0px)',
  },
  '85%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  }
};

const styles = StyleSheet.create({
  notifications: {
    border: '2px dotted #e1484c',
    padding: '1rem .5rem 0 .5rem',
    float: 'right',
  },
  menuItem: {
    textAlign: 'right',
    ':hover': {
      cursor: 'pointer'
    }
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
    },
  },
  opacityAnim: {
    ':hover': {
      animationName: opacity,
      animationDuration: '0.2s',
    }
  },
  bounceAnim: {
    ':hover': {
      animationName: bounce,
      animationDuration: '0.5s',
    }
  }
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default WithLogging(Notifications, 'Notifications');

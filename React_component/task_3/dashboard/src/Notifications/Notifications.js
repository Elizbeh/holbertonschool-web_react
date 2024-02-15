// Notifications.js
import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from '../Notifications/NotificationItem';
import { getLatestNotification } from '../utils/utils';
import WithLogging from '../HOC/WithLogging';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer } = this.props;
    return (
      <div className='container'>
        <div className={`menuItem${displayDrawer ? ' display-menuItem' : ''}`}>
          Your notifications
        </div>
        <div className={`Notifications${displayDrawer ? ' display-drawer' : ''}`}>
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
            <NotificationItem
              id={1}
              type="default"
              value="New course available"
              markAsRead={this.markAsRead}
            />
            <NotificationItem
              id={2}
              type="urgent"
              value="Urgent requirement - complete by EOD"
              markAsRead={this.markAsRead}
            />
            <NotificationItem
              id={3}
              type="urgent"
              html={{ __html: getLatestNotification() }}
              markAsRead={this.markAsRead}
            />
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
};

export default WithLogging(Notifications, 'Notifications');

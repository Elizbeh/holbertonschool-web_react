import React from 'react';
import './Notifications.css';
import NotificationItem from '../Notifications/NotificationItem';
import { getLatestNotification } from '../utils/utils';

function Notifications({ displayDrawer }) {
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
          <NotificationItem type="default" value="New course available" />
          <NotificationItem
            type="urgent"
            value="Urgent requirement - complete by EOD"
          />
          <NotificationItem
            type="urgent"
            html={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;

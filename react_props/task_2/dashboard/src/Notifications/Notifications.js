import React from 'react';
import '../Notifications/Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from '../Notifications/NotificationItem';

function Notifications() {
  return (
    <div className='Notifications'>
      <button
        style={{
          position: "absolute",
          right: "16px",
          top: ".8rem",
          fontSize: "16px",
          border: "none",
          background: "none",
          cursor: "pointer"
        }}
        aria-label="Close"
        onClick={() => {
          console.log("Close button has been clicked\n");
        }}
      >
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem /* props for first item */ />
        <NotificationItem /* props for second item */ />
        <NotificationItem /* props for third item */ />
      </ul>
    </div>
  );
}

export default Notifications;

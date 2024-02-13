// src/Notifications/NotificationItem.js
import React from 'react';

const NotificationItem = ({ type, html, value }) => {
    return (
        <li data-priority={type} dangerouslySetInnerHTML={html}>
            {value}
        </li>
    );
};

export default NotificationItem;

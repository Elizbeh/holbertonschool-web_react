import React from 'react';
import '../../src/App/App.css';
import { getLatestNotification } from '../utils/utils';

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
                onClick={ () => {
                    console.log("Close button has been clicked\n");
                }}
            >x</button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications;
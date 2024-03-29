import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { id, markAsRead} = this.props;
      markAsRead(id);  
    }

    render() {
    const { type, html, value } = this.props; 
    
    return (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={this.handleClick}
        >
          {value}
        </li>
      );
    };
}

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.object,
    markAsRead: PropTypes.func.isRequired,
  };
  
  NotificationItem.defaultProps = {
    html: null,
  };

export default NotificationItem;

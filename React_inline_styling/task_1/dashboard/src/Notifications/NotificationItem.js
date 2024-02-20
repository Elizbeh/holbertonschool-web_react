import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  const styles = StyleSheet.create({
    default: {
      color: 'blue',
    },
    urgent: {
      color: 'red',
      fontWeight: 'bold',
    },
  });

  const liProps = useMemo(() => {
    const props = { 'data-notification-type': type };
    if (html) props.dangerouslySetInnerHTML = html;
    return props;
  }, [type, html]);

  return (
    <li className={css(type === 'urgent' ? styles.urgent : styles.default)} {...liProps} onClick={() => markAsRead(id)}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;

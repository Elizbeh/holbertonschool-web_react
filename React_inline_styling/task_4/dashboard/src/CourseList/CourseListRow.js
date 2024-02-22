import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const styles = StyleSheet.create({
    row: {
      backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    },
    headerTh: {
      borderBottom: '2px solid #deb5b5',
    },
    th: {
      borderBottom: '1px solid #deb5b5',
    },
  });

  return (
    <tr className={css(styles.row)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.headerTh)} colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.headerTh)}>{textFirstCell}</th>
            <th className={css(styles.headerTh)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;

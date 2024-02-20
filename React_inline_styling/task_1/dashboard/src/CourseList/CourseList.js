import React from 'react';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseListRow from '../CourseList/CourseListRow';
import CourseShape from '../CourseList/CourseShape';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
  return (
    <table id={css(styles.CouseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  CouseList: {
    width: '100%',
    border: '1px solid lightgrey',
    borderCollapse: 'collapse',
    marginTop: '2rem;}'
  }
})

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;

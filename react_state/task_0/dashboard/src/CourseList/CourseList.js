import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
  return (
    <table id={css(styles.CouseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length == 0 && <CourseListRow textFirstCell='No course available yet' />}
        {listCourses.map((ele) => <CourseListRow key={ele.id} textFirstCell={ele.name} textSecondCell={ele.credit} isHeader={false} />)}
      </tbody>
    </table>
  )
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
}

export default CourseList
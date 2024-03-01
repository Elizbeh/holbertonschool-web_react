import { bindActionCreators } from 'redux';
import * as courseActionTypes from './courseActionTypes';

export const selectCourse = (index) => ({
  type: courseActionTypes.SELECT_COURSE,
  index,
});

export const unselectCourse = (index) => ({
  type: courseActionTypes.UNSELECT_COURSE,
  index,
});

export const bindActionCreators = bindActionCreators({
  selectCourse,
  unselectCourse,
})
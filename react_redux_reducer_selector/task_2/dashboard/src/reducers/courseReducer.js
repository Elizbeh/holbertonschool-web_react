import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map(course => ({
        ...course,
        isSelected: false,
      }));

    case SELECT_COURSE:
      return state.map((course, index) => ({
        ...course,
        isSelected: index === action.index,
      }));

    case UNSELECT_COURSE:
      return state.map(course => ({
        ...course,
        isSelected: false,
      }));

    default:
      return state;
  }
};

export default courseReducer;

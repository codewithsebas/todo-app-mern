import * as actionTypes from "../actions/type";

export const tasksReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TASK:
      return [action.payload, ...state];
    case actionTypes.GETALL_TASK:
      return action.payload;
    case actionTypes.COMPLETED_TASK:
      return state.map((task) =>
        task._id === action.payload._id
          ? { ...task, completed: !task.completed }
          : task
      );
    case actionTypes.UPDATE_TASK:
        return 
    default:
      return state;
  }
};

import * as actionTypes from "../actions/type"

export const tasksReducers = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADDNEW_TASK:
            return [action.payload, ...state];
        case actionTypes.GETALL_TASK:
            return action.payload
        default:
            return state;
    }
}
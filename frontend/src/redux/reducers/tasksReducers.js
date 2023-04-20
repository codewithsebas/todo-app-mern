import * as actionTypes from "../actions/type"

export const tasksReducers = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADDNEW_TASK:
        return [action.payload, ...state];
        default:
            return state;
    }
}
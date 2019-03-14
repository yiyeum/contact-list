import * as types from '../actions/actionTypes';
import initialState from './initialState';

function contactDataReducer(state = initialState.data, action) {
    switch (action.type) {
        case types.GOT_LISTS: {
            return {
                ...state,
                lists: action.data
            };
        }
        case types.GOT_LIST_BY_ID: {
            return {
                ...state,
                selectedList: action.data
            };
        }
        default:
            return state;
    }
}

export default contactDataReducer;
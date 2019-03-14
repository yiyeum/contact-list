import { combineReducers } from 'redux';
import contactDataReducer from './contactDataReducer';

const rootReducer = combineReducers({
    data: contactDataReducer,
});

export default rootReducer;
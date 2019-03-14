import { combineReducers } from 'redux';
import contactDataReducer from './contactDataReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    data: contactDataReducer,
    common: commonReducer
});

export default rootReducer;
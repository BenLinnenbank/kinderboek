import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import themeReducer from './themeReducer';

const allReducers = combineReducers({
    loggedInUser: loginReducer,
    theme: themeReducer,
});

export default allReducers;
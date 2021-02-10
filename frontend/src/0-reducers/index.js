import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import themeReducer from './themeReducer';
import createAccountReducer from './createAccountReducer';

const allReducers = combineReducers({
    loggedInUser: loginReducer,
    theme: themeReducer,
    createAccount: createAccountReducer,
});

export default allReducers;
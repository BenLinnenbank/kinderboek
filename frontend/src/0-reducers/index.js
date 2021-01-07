import { combineReducers } from 'redux';
import loginReducer from './loginReducer'

const allReducers = combineReducers({
    loggedInUser: loginReducer,
});

export default allReducers;
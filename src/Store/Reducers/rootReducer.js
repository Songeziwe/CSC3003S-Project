import { combineReducers } from 'redux';
import personalReducer from './personalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    personal: personalReducer
});
export default rootReducer;
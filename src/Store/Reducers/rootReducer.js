import { combineReducers } from 'redux';
import formReducer         from './formReducer';
import authReducer         from './authReducer';
import { firebaseReducer } from 'react-redux-firebase'; // firebase information including authentication

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    firebase: firebaseReducer
});
export default rootReducer;
import { combineReducers }  from 'redux';
import formReducer          from './formReducer';
import authReducer          from './authReducer';
import staffReducer         from './staffReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer }  from 'react-redux-firebase';
 // firebase information including authentication

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    staff: staffReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
export default rootReducer;
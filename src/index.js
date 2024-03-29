import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Store/Reducers/rootReducer';
import thunk from 'redux-thunk'; // middleware function

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './Config/fbConfig';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig,  {attachAuthIsReady:true})
    )   
);

// wait for firebase auth service to be ready and the render to the DOM
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
});

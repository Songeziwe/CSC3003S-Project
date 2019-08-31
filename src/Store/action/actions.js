// Handle Login
export const auth = (credetials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase(); // eccess firebase authentication service
        
        // let firebase signin the user
        firebase.auth().signInWithEmailAndPassword(
            credetials.email,
            credetials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error });
        });
    }
}

export const authOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' }); // resume the dispatch
        });
    }
}

// ======== Create documents for this new user ============
// create document for personal details
export const  createPersonalDoc = (userId) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        // have to create documents for the form with id equal to userId
    }
}
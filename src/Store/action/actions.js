// Handle Login
export const auth = (credetials) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();   // eccess firebase authentication service
        
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
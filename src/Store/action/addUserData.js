export const personalDetails = (details) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to database i.e interact with the remote database (firestore)
        const firestore = getFirestore();          // refernce to the firestore database
        firestore.collection("personalDetails").add({
            ...details
        }).then(() => {
            dispatch({ type: 'CREATE_P_DETAILS', details });
        }).catch((err) => {
            // executed if an error is thrown
            console.log(err);
        });   
        
    }
}
export const personalDetails = (pDetails) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make async call to database i.e interact with the remote database (firestore)
        const firestore = getFirestore();          // refernce to the firestore database
        const firebase = getFirebase(); // to get user id from authentication

        // CREATE DOCUMENT BASED ON USER'S ID FOR UNIQUENESS
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                // create personal details document for this user
                firestore.collection("personalDetails").doc(user.uid).set({
                    ...pDetails
                }).then(() => dispatch({ type: 'CREATE_P_DETAILS', pDetails }))
                  .catch((err) => console.log(err)); 
            }
        }); 
    }
}

export const residenceDetails = (resDetails) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase  = getFirebase();
        const firestore = getFirestore();

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                firestore.collection("ResidenceDetails").doc(user.uid).set({
                    ...resDetails
                }).then(() => dispatch({ type: 'CREATE_RES_DETAILS', resDetails }))
                  .catch((err) => console.log(err));
            }
        });
    }
}

export const degreeDetails = (dDetails) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase  = getFirebase();
        const firestore = getFirestore();

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                firestore.collection("DegreeDetails").doc(user.uid).set({
                    ...dDetails
                }).then(() => dispatch({ type: 'CREATE_D_DETAILS', dDetails }))
                  .catch((err) => console.log(err));
            }
        });
    }
}

export const mitDetails = (mitDetails) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase  = getFirebase();
        const firestore = getFirestore();

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                firestore.collection("MITDetails").doc(user.uid).set({
                    ...mitDetails
                }).then(() => dispatch({ type: 'CREATE_MIT_DETAILS', mitDetails }))
                  .catch((err) => console.log(err));
            }
        });
    }
}
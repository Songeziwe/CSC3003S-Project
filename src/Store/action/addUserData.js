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

// ======== Create documents for this new user ============
// create document for personal details
export const  createPersonalDoc = () => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        // have to create documents for the form with id equal to userId
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                // create personal details document for this user
                firestore.collection("personalDetails").doc(user.uid).set({
                    title      : "",
                    name       : "",
                    surname    : "",
                    initials   : "",
                    citizenship: "",
                    currentCity: "",
                    isComplete : false
                }).then(() => console.log("PersonalDetailsDoc created"))
                  .catch((err) => console.log(err));

                // create residence details document for this user
                firestore.collection("ResidenceDetails").doc(user.uid).set({
                    city      : "",
                    country   : "",
                    isComplete: false
                }).then(() => console.log("residenceDetailsDoc created"))
                  .catch((err) => console.log(err));

                // create degree details document for this user
                firestore.collection("DegreeDetails").doc(user.uid).set({
                    counrty         : "",
                    degreeAppliedFor: "",
                    degreeName      : "",
                    NQFequivalent   :"",
                    numberOfyears   : "",
                    university      : "",
                    isComplete      : false
                }).then(() => console.log("degreeDetailsDoc created"))
                  .catch((err) => console.log(err));

                // create degree details document for this user
                firestore.collection("MITDetails").doc(user.uid).set({
                    title      : "",
                    name       : "",
                    surname    : "",
                    citizenship: "",
                    isMIT      : false,
                }).then(() => console.log("MITDoc created"))
                  .catch((err) => console.log(err));
            }
            else{
                // User not logged in or has just logged out
                console.log(user);
            }
        });
    }
}


const initState = {
    personalDetails: [{
            title      : "",
            name       : "",
            surname    : "",
            citizenship: "",
            currentCity: "",
            isComplete : false
        }],
    residenceDetails: [{ city: "", country: "", isComplete: false }],
    degreeDetails: [{ 
            degreeName      : "", 
            degreeAppliedFor: "",
            university      : "",
            numberOfYears   : "",
            country         : "",
            NQfequivalent   : "", 
            isComplete      : false 
        }],
    mitDetails:[{
        title      : "", 
        name       : "", 
        surname    : "",
        citizenship: "",
        city       : "",  
        isMIT      : false,
        isComplete : false 
    }],
    user: ""   
}
const staffReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DETERMINE_USER':
            return {
                ...state,
                user: action.user
            }
    
        default:
            return state;
    }
}

export default staffReducer;
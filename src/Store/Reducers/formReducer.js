const initState = {
        personalDetails: [{
                title      : "",
                name       : "",
                surname    : "",
                citizenship: "",
                currentCity: "",
                isApplicant: true,
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
// personal details reducer
const formReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_P_DETAILS':
            const newPersonalDetails = [...state.personalDetails, action.pDetails];
            return {
                ...state,
                personalDetails: newPersonalDetails
            };
        case 'CREATE_RES_DETAILS':
            const newResDetails = [...state.residenceDetails, action.resDetails];
            return {
                ...state,
                residenceDetails: newResDetails
            };
        case 'CREATE_D_DETAILS':
                const newD_Details = [...state.degreeDetails, action.dDetails];
                return {
                    ...state,
                    degreeDetails: newD_Details
                };
        case 'CREATE_MIT_DETAILS':
            const newMIT_Details = [...state.mitDetails, action.mitDetails];
            return {
                ...state,
                mitDetails: newMIT_Details
            };
        default:
            return state;
    }
    
}
export default formReducer;
const initState = {
        personalDetails: {
            title: "",
            name: "",
            surname: "",
            citizenship: "",
            currentCity: "",
            isComplete: false
        }
        
}
// personal details reducer
const personalReducer = (state = initState, action) => {
    if (action.type === 'CREATE_P_DETAILS'){
        console.log(action.details);
        return state;
    }
    return state;
}
export default personalReducer;
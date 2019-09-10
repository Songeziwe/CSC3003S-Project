const initState = {
    user: {
        name: "",
        surname: ""
    }   
}
const staffReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_LOOK_UP':
            const array_details = action.details.split(" ");
            console.log(array_details);
            return {
                user: {
                    name: array_details[0],
                    surname: array_details[1]
                }
            }
    
        default:
            return state;
    }
}

export default staffReducer;
const initState = {
    users:[
        { username: "Zibondiwe", password: "@zibondiwe.com", isLogged: false}
    ],
    username: "", 
    password: ""
}

// Reducer
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN':
            const {event}  = action;
            const array = [...state.users]; // make a copy of the array
            event.preventDefault();
            if(array[0].username === state.username && array[0].password === state.password){
                array[0].isLogged = !array[0].isLogged;
                console.log("Logged in successfully");
                return {
                    ...state,
                    users: array
                }
            }
            return state;
        case 'HANDLE_CHANGE':
            return {
                ...state,
                [action.event.target.name]: action.event.target.value
            }
        
        default:
            console.log("Default");
            return state;
    }
}

export default rootReducer;
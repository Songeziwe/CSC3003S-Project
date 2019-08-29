const initState = {
    authError: null
}

// Reducer
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Wrong email or password'
            }
        case 'SIGNOUT_SUCCESS':
            return state;
        default:
            return state;
    }
}

export default authReducer;
// Handle Login
export const auth = (event) => {
    return {
        type: 'LOGIN',
        event
    }
}
export const handleChange = (event) => {
    return {
        type: 'HANDLE_CHANGE',
        event
    }
}
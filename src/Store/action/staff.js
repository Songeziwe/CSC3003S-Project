
export const userLookUp = (event) => {
    event.preventDefault();
    const details = event.target.innerHTML;
    return {
        type: 'USER_LOOK_UP', details
    }
}

export const determineUser = (user) => {
    return {
        type: 'DETERMINE_USER', user
    }
}
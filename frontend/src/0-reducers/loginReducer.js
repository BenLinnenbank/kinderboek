const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log('were inside the login now: ', action)
            return action.payload;
        default:
            console.log('this is the default ', state)
            return state;
    };
}

export default loginReducer;
const createAccountReducer = (state = false, action) => {
    switch (action.type) {
        case 'CREATE_ACCOUNT':
            return !state;
        default:
            return state;
    };
}

export default createAccountReducer;
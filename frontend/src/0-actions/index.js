export const login = (user) => {
    return {
        type: 'LOGIN',
        payload: user
    };
}

export const toggleTheme = () => {
    return {
        type: 'TOGGLE_THEME',
    }
}

export const createAccount = () => {
    return {
        type: 'CREATE_ACCOUNT',
    }
}
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
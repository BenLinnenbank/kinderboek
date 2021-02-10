import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme.js";

const ThemeContainer = ({ children }) => {
    const currentTheme = useSelector(state => state.theme);

    return (
        <>
            <ThemeProvider theme={currentTheme ? lightTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </>
    );
};

export default ThemeContainer;
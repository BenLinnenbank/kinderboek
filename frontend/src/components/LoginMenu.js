import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../0-actions/index';


const StyledMenu = styled.menu`
    display: flex;
    justify-content: space-between;
    width: 96vw;
    height: 60px;
    padding: 12px;
    margin: 0px;
`;
const StyledContentMenu = styled.menu`
    display: flex;
    align-items: center;
    margin: 0px;
`;
const StyledSettingsMenu = styled.menu`
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InlineCTA = styled.button`
    margin-left: 4px;
    color: ${props => props.theme.colors.text.brand};
    font-weight: bold;
    height: 16px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
`;

const LoginMenu = () => {

    const dispatch = useDispatch()
    const signupMenu = useSelector(state => state.createAccount)
    console.log(signupMenu);

    const toggleSignup = () => {
        dispatch(createAccount());
    }

    return (
        <StyledMenu>
            <StyledContentMenu>
                <img src={logo} alt="Company logo" />
            </StyledContentMenu>
            <StyledSettingsMenu>
                {signupMenu
                    ?
                    (<InlineCTA onClick={() => toggleSignup()}> Back to login</InlineCTA>)
                    :
                    (<><p>Don't have an account yet?</p><InlineCTA onClick={() => toggleSignup()}>Create account</InlineCTA></>)
                }
            </StyledSettingsMenu>
        </StyledMenu>
    );
}

export default LoginMenu;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login, createAccount } from '../0-actions/index';
import { useHistory } from 'react-router-dom';


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 240px;
    height: 100vh;
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.2em;
`;

const StyledInput = styled.input`
    width: 180px;
    margin-bottom: 0.5em;
    box-sizing: border-box;
    &.login-button {
        margin-top: 0.5em;
    }
`;

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0px;
`;

const StyledH1 = styled.h1`
    
`;


const Login = () => {

    let history = useHistory()
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        dispatch(createAccount());
        history.push('/createaccount');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        const result = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });
        const resultJson = await result.json();
        console.log('this is the result: ', resultJson);
        if (resultJson.email) {
            const user = {
                email: email,
                loggedIn: true
            };
            dispatch(login(user));
        } else alert('Foute credentials');
    };

    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledH1>Login</StyledH1>
                <StyledUl>
                    <li>
                        <StyledLabel>Email</StyledLabel>
                        <StyledInput type="email" required value={email} onChange={(e) => setEmail(e.target.value)} name="field1" className="field-long" />
                    </li>
                    <li>
                        <StyledLabel>Password</StyledLabel>
                        <StyledInput type="text" required value={password} onChange={(e) => setPassword(e.target.value)} name="field2" placeholder="Password" />
                    </li>
                    <li>
                        <StyledInput className="login-button" type="submit" value="Submit" />
                    </li>
                </StyledUl>
            </StyledForm>
            <button onClick={() => handleSignup()}>Sign Up</button>
        </>
    );
};

export default Login

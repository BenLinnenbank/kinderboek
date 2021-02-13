import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../0-actions/index';
import FormInput from './reusable_components/form/FormInput';
import Form from './reusable_components/form/Form';


const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.2em;
`;

const StyledUl = styled.ul`
    list-style-type: none;
    padding: 0px;
`;


const LoginForm = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <StyledUl>
                    <li>
                        <StyledLabel>Email</StyledLabel>
                        <FormInput type="email" required value={email} onChange={(e) => setEmail(e.target.value)} name="field1" className="field-long" />
                    </li>
                    <li>
                        <StyledLabel>Password</StyledLabel>
                        <FormInput type="password" required value={password} onChange={(e) => setPassword(e.target.value)} name="field2" placeholder="Password" />
                    </li>
                    <li>
                        <FormInput className="form-button" type="submit" value="Submit" />
                    </li>
                </StyledUl>
            </Form>
        </>
    );
};

export default LoginForm;

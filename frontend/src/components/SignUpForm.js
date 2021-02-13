import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login, createAccount } from '../0-actions/index';
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


const SignUp = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return alert('passwords are not the same');
        }
        const result = await fetch('/api/user/newuser', {
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
            dispatch(createAccount());
        } else alert('User already exists');
    };

    return (
        <>
            <Form onSubmit={handleSignUp}>
                <h1>Signup</h1>
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
                        <StyledLabel>Confirm Password</StyledLabel>
                        <FormInput type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="field3" placeholder="Password" />
                    </li>
                    <li>
                        <FormInput className="form-button" type="submit" value="Submit" />
                    </li>
                </StyledUl>
            </Form>
        </>
    );
}

export default SignUp;

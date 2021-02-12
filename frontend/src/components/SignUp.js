import React from 'react';
import styled from 'styled-components';
import LoginMenu from './LoginMenu';
import SignUpForm from './SignUpForm';
import loginbg from '../assets/images/loginbg.svg';

const SignUpContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${loginbg});
    display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Login() {
  return (
    <SignUpContainer>
      <LoginMenu />
      <SignUpForm />
    </SignUpContainer>
  );
}
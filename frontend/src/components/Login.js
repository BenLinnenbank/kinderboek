import React from 'react';
import styled, { keyframes } from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import LoginMenu from './LoginMenu';
import clouds from '../assets/images/clouds.png';
import { useSelector } from 'react-redux';

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #F0F8FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const moveClouds = keyframes`
  100% {
    transform: translateX(calc(100vw + 350px));
  }
`;

const CloudImage = styled.img`
  margin-top: 20vh;
  position: absolute;
  animation: ${moveClouds} 100s linear infinite;
  left: -350px;
  z-index: 2;
`;

const Login = () => {
  const signupMenu = useSelector(state => state.createAccount);

  return (
    <LoginContainer>
      <LoginMenu />
      <CloudImage src={clouds} />
      {
        signupMenu ? 
          (<SignUpForm />) :
          (<LoginForm />)
      }
    </LoginContainer>
  );
}

export default Login;
import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import LoginMenu from './LoginMenu';
import loginbg from '../assets/images/loginbg.svg';
import { useSelector } from 'react-redux';

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${loginbg});
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Login = () => {
  const signupMenu = useSelector(state => state.createAccount);

  return (
    <LoginContainer>
      <LoginMenu />
      {
        signupMenu ? 
          (<SignUpForm />) : 
          (<LoginForm />)
      }
    </LoginContainer>
  );
}

export default Login;
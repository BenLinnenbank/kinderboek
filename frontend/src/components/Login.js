import React from 'react'
import styled from 'styled-components';
import LoginForm from './LoginForm'
import LoginMenu from './LoginMenu'
import loginbg from '../assets/images/loginbg.svg'

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${loginbg});
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Login() {
  return (
    <LoginContainer>
      <LoginMenu />
      <LoginForm />
    </LoginContainer>
  )
}

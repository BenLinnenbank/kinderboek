import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/routers/AppRouter';
import AppContainer from './components/AppContainer';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

function App() {

  let history = useHistory()
  const isUserLoggedIn = useSelector(state => state.loggedInUser.loggedIn);
  const createAccount = useSelector(state => state.createAccount);
  console.log('this is the redux create account state variablie: ', createAccount);

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push('/library');
    } else {
      if (createAccount) {
        return history.push('/createaccount');
      }
      history.push('/');
    }
  }, [isUserLoggedIn, createAccount, history]);

  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;

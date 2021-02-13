import React, { useEffect } from 'react';
import AppRouter from './components/routers/AppRouter';
import AppContainer from './components/AppContainer';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import './App.css';

const App = () => {

  let history = useHistory();
  
  const isUserLoggedIn = useSelector(state => state.loggedInUser.loggedIn);

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push('/library');
    } else {
      history.push('/');
    }
  }, [isUserLoggedIn, history]);

  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;

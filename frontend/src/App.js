import React from 'react';
import './App.css';
import AppRouter from './components/routers/AppRouter';
import AppContainer from './components/AppContainer';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

function App() {
  let history = useHistory()
  const isUserLoggedIn = useSelector(state => state.loggedInUser.loggedIn);
  console.log('This is the user: ', isUserLoggedIn);

  return (
    <AppContainer>
      <AppRouter>
        {!isUserLoggedIn ? (
          history.push('/')
        ) : (
            history.push('/library')
          )}
      </AppRouter>
    </AppContainer>
  );
}

export default App;

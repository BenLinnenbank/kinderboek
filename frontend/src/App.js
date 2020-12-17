import React from 'react';
import './App.css';
import AppRouter from './components/routers/AppRouter';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;

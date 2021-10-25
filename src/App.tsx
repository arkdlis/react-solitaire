import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Game from './game/components/Game/Game';
import { store } from './game/store/store';

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}

export default App;

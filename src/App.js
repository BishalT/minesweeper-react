import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Board from './components/Board';

function App() {
  return (
    <div className="game">
        <Board height={8} width={8} mines={10} />
    </div>
  );
}

export default App;

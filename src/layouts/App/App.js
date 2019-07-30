import React from 'react';
import './App.css';

import Player from '../Player';

function App() {
  return (
    <div className="container">
      <div className="left">
        专辑
      </div>
      <div className="center">
        <Player />
      </div>
      <div className="right">
        单曲/精选集
      </div>
    </div>
  );
}

export default App;

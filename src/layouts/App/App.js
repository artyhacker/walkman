import React from 'react';
import './App.css';

import Player from '../Player';

function App() {
  return (
    <div className="container">
      <div className="header">
        header
      </div>
      <div className="content">
        <div className="content-left">
          left
        </div>
        <div className="content-center">
          <Player/>
        </div>
        <div className="content-right">
          right
        </div>
      </div>
      <div className="footer">
        footer
      </div>
    </div>
  );
}

export default App;

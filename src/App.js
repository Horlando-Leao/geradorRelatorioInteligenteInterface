import React from 'react';
import './App.css';

import SearchPage from './Pages/SearchPage.js';
import GraphicPage from './Pages/GraphicPage.js'

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

function App() {
  return (
    <div className="App">
      <ColoredLine color="blue" />
      <SearchPage />
      <ColoredLine color="blue" />
      <GraphicPage />
      
    </div>
  );
}

export default App;

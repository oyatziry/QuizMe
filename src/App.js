import React from 'react';
import './App.css';

import Header from './Components/Header';
import Routes from './Config/routes.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;

import React from 'react';

import '../styles/App.css';
import Navigation from '../components/Navbar/Navigation';
import Home from '../components/Home/Home';
import Popular from '../containers/Popular';


function App() {
  return (
      <div className="App">
        <Navigation/>
        <Home/>
        <Popular/>
      </div>
  );
}

export default App;

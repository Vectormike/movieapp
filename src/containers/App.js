import React from 'react';
import '../styles/App.css';
import Navigation from '../components/Navbar/Navigation';
import Home from '../components/Home/Home';
import Popular from '../containers/Popular';
import TopRated from '../containers/Top_Rated';

function App() {
  return (
      <div className="App">
        <Navigation/>
        <Home/>
        <Popular/>
        <TopRated/>
      </div>
  );
}

export default App;

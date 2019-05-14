import React from 'react';
import { Provider } from 'react-redux';
import '../styles/App.css';
import Navigation from '../components/Navbar/Navigation';
import Home from '../components/Home/Home';



function App() {
  return (
      <div className="App">
        <Navigation/>
        <Home/>
      </div>
  );
}

export default App;

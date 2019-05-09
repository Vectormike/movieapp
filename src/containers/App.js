import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import '../styles/App.css';
import Navigation from '../components/Navbar/Navigation';
import Search from '../containers/Search';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation/>
        <Search/>
      </div>
    </Provider>
  );
}

export default App;

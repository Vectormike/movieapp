import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from '../components/Navbar/Navigation';
import Search from '../components/SearchBar/SearchBar';
import Home from '../containers/Home';
import Popular from '../containers/Popular';

import TopRated from '../containers/Top_Rated';
import Latest from './Latest';

function App() {
  return (
    <div>
      <Navigation/>
      <Search/>
      <Switch>
          <Route exact path ="/" component={Home}/>
          <Route path="/popular" component={Popular}/>
          <Route path="/topRated" component={TopRated}/>
          <Route path="/latest" component={Latest}/>
      </Switch>
    </div>
      
  );
}

export default App;

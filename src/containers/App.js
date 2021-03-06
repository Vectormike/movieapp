import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navbar/Navigation';
import SearchField from '../containers/SearchBar';
import Home from '../containers/Home';
import Popular from '../containers/Popular';
import TopRated from '../containers/Top_Rated';
import Searched from '../containers/Searched';
import Latest from './Latest';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="">
        <Navigation/>
        <SearchField/>
          <Switch>
              <Route exact path ="/" component={Home}/>
              <Route path="/popular" component={Popular}/>
              <Route path="/topRated" component={TopRated}/>
              <Route path="/latest" component={Latest}/>
              <Route path="/searched" component={Searched}/>
          </Switch>
      </div>
        
    );
  }
}

export default App;

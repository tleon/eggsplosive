import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import Kitchen from './Kitchen';
import Game from './Game';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Collection" component={Collection} />
            <Route path="/Kitchen" component={Kitchen} />
            <Route path="/Game" component={Game} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;




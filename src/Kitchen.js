import React, { Component } from 'react';
import Recipe from './Recipe';
import Egg from './Egg';
import Cauldron from './Cauldron';
import Inventory from './Inventory';

class Kitchen extends Component {
  render() {
    return (
      <div className="App">
        <Recipe />
        <Cauldron />
        <Egg />
        <Inventory />
      </div>
    );
  }
}

export default Kitchen;
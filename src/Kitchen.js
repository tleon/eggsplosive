import React, { Component } from 'react';
import Recipe from './Recipe';
import Egg from './Egg';
import Cauldron from './Cauldron';
import Inventory from './Inventory';
import cauldron from './assets/cauldron.png'
import './Kitchen.css';

class Kitchen extends Component {
  render() {
    return (
      <div className="Background">
        <img src={cauldron} alt='cauldron' className='cauldron'/>
        <Recipe />
        <Cauldron />
        <Egg />
        <Inventory />
      </div>
    );
  }
}

export default Kitchen;
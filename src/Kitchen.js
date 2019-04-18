import React, { Component } from 'react';
import Recipe from './Recipe';
import Egg from './Egg';
import Cauldron from './Cauldron';
import Inventory from './Inventory';
import './Kitchen.css';

class Kitchen extends Component {
  render() {
    return (
      <div className="Background">
        <img className="Chaudron" src="http://www.pngmart.com/files/7/Cauldron-PNG-Photos.png" alt='cauldron'/> 
        <div className="Placement">
        <button className="buttonKitchen">Junk</button>
        <button className="buttonKitchen">Basic</button>   
        <button className="buttonKitchen">Fine</button>   
        <button className="buttonKitchen">Rare</button>   
        <button className="buttonKitchen">Legendary</button>
        <button className="buttonKitchen">Exotic</button>   
        <button className="buttonKitchen">Masterwork</button>
        <button className="buttonKitchen">Ascended</button>  
        </div>
        <div>Milk</div>
        <div>Chocolate</div>
        <div>Egg</div>
        <Recipe />
        <Cauldron />
        <Egg />
        <Inventory />
      </div>
    );
  }
}

export default Kitchen;
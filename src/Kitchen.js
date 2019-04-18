import React, { Component } from 'react';
import Recipe from './Recipe';
import Egg from './Egg';
import Cauldron from './Cauldron';
import Inventory from './Inventory';
import cauldron from './assets/cauldron.png';
import { Button, Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './Kitchen.css';

class Kitchen extends Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem("eggs") && !localStorage.getItem("chocolates") && !localStorage.getItem("milk")) {
      localStorage.setItem("eggs", "0");
      localStorage.setItem("chocolates", "0");
      localStorage.setItem("milk", "0");
    }
    this.state = {
      allEggs: [],
      boughtEgg: null,
      eggs: localStorage.getItem("eggs"),
      chocolates: localStorage.getItem("chocolates"),
      milk: localStorage.getItem("milk"),
    }
    this.getEggs();
  }

  getEggs = () => {
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs').then(r => {
      const allEggs = r.data;
      this.setState({ eggs: allEggs });
    })
  }

  componentWillMount() {
    // To do: calculate prices from API
    this.prices = {
      "junk": {
        eggs: 5,
        chocolates: 5,
        milk: 5,
      },
      "basic": {
        eggs: 10,
        chocolates: 10,
        milk: 10,
      },
      "fine": {
        eggs: 15,
        chocolates: 15,
        milk: 15,
      },
      "rare": {
        eggs: 20,
        chocolates: 20,
        milk: 20,
      },
      "legendary": {
        eggs: 25,
        chocolates: 25,
        milk: 25,
      },
      "exotic": {
        eggs: 30,
        chocolates: 30,
        milk: 30,
      },
      "masterwork": {
        eggs: 30,
        chocolates: 30,
        milk: 30,
      },
      "ascended": {
        eggs: 30,
        chocolates: 30,
        milk: 30,
      },
    }
  }

  buyEgg = (eggRarity) => {
    const { eggs, chocolates, milk, allEggs } = this.state;
    // If enough money
    if (eggs < this.prices[eggRarity].eggs || chocolates < this.prices[eggRarity].chocolates || milk < this.prices[eggRarity].milk) {
      // Calculate money
      const newEggsValue = parseInt(localStorage.getItem("eggs")) - this.prices[eggRarity].eggs;
      const newChocolatesValue = parseInt(localStorage.getItem("chocolates")) - this.prices[eggRarity].chocolates;
      const newMilkValue = parseInt(localStorage.getItem("milk")) - this.prices[eggRarity].chocolates;
      // Register new money (in state and local storage)
      this.setState({ eggs: newEggsValue, chocolates: newChocolatesValue, milk: newMilkValue });
      localStorage.setItem("eggs", newEggsValue.toString());
      localStorage.setItem("chocolates", newChocolatesValue.toString());
      localStorage.setItem("milk", newMilkValue.toString());
      // Get random egg of bought rarity
      const eggsList = allEggs.rarity.filter({eggRarity})
      const randomEgg = eggsList[Math.floor(Math.random()*eggsList.lenght)]
      this.setState({ boughtEgg: eggsList[randomEgg] })
    }
  }


  render() {
    return (
      <div className="Background">
        <img src={cauldron} alt='cauldron' className='cauldron' />
        <Container>
          <Row>
            <Col sm={{ size: 'auto', offset: 1 }}><Button color="secondary">secondary</Button></Col>
            <Col sm={{ size: 'auto', offset: 1 }}><Button color="secondary">secondary</Button></Col>
            <Col sm={{ size: 'auto', offset: 1 }}><Button color="secondary">secondary</Button></Col>
            <Col sm={{ size: 'auto', offset: 1 }}><Button color="secondary">secondary</Button></Col>
          </Row>
        </Container>
        <Recipe />
        <Cauldron />
        <Egg />
        <Inventory />
      </div>
    );
  }
}

export default Kitchen;
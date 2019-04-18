import React, { Component } from 'react';
import Recipe from './Recipe';
import Egg from './Egg';
import Cauldron from './Cauldron';
import Inventory from './Inventory';
import cauldron from './assets/cauldron.png';
import { Button, Container, Row, Col  } from 'reactstrap';
import './Kitchen.css';

class Kitchen extends Component {
  render() {
    return (
      <div className="Background">
        <img src={cauldron} alt='cauldron' className='cauldron'/> 
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
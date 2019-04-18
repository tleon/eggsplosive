import React, { Component } from 'react';
import './Infos.css';
import milkimg from './assets/milk.png';
import eggsimg from './assets/egg.png';
import chocolatesimg from './assets/chocolate.png';
import character from './assets/RogerRabbit.jpg';
import { Container, Row, Col } from 'reactstrap';

class Infos extends Component {

  render() {
    const { milk, eggs, chocolates } = this.props;
    return (
      <Container className="Infos">
      <Row>
          <Col ><img src={milkimg} alt='milk'/> {milk}</Col>
          <Col ><img src={eggsimg} alt='milk'/> {eggs}</Col>
          <Col ><img src={chocolatesimg} alt='milk'/> {chocolates}</Col>
          <Col><img src={character} alt='RogerRabbit'/> Roger Rabbit</Col>
      </Row>
      </Container>
        
        /*<br />
        <span></span>
        <br />
        <span><img src={chocolatesimg} alt='milk'/> : {chocolates}</span>
      </div>*/
    );
  }
}

export default Infos;
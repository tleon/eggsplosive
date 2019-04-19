import React, { Component } from 'react';
import milkimg from './assets/milk.png';
import eggsimg from './assets/egg.png';
import chocolatesimg from './assets/chocolate.png';
import character from './assets/RogerRabbit.jpg';
import './Infos.css';


class Infos extends Component {

  render() {
    const { milk, eggs, chocolates } = this.props;
    return (
      <div className="Infos">
        <span><img src={milkimg} alt='milk'/> {milk}</span>
        <span><img src={eggsimg} alt='milk'/> {eggs}</span>
        <span><img src={chocolatesimg} alt='milk'/> {chocolates}</span>
        <span><img src={character} alt='RogerRabbit'/> Roger Rabbit</span>
      </div>
    );
  }
}

export default Infos;
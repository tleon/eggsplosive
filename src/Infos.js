import React, { Component } from 'react';
import './Infos.css';

class Infos extends Component {

  render() {
    const { milk, eggs, chocolates } = this.props;
    return (
      <div className="Infos">
        <span>Milk : {milk}</span>
        <span>Eggs : {eggs}</span>
        <span>Chocolates : {chocolates}</span>
      </div>
    );
  }
}

export default Infos;
import React, { Component } from 'react';
import './Collectable.css';

class Bunny extends Component {
  constructor(props) {
    super(props);
    // Generate random position
    this.obstacleFalling = setInterval(() => this.fall(), 300)
    this.state = {
      posX: -10,
      posY: 70,
    }
  }

  componentWillUnmount() {
    clearInterval(this.obstacleFalling);
  }

  fall() {
    const { posX } = this.state;
    const newPosX = posX + 5;
    this.setState({ posX: newPosX });
    if (newPosX >= 90) {
      const { destroyBunny, index } = this.props;
      destroyBunny(index);
    }
  }

  render() {
    const { type } = this.props;
    const { posX, posY } = this.state;
    return (
      <div
        className="Bunny"
        style={{
          top: `${posY}%`,
          left: `${posX}%`,
          backgroundImage: `url(assets/collectables/bunny.png)`,
        }}
      />
    );
  }
}

export default Bunny;
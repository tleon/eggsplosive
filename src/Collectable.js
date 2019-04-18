import React, { Component } from 'react';
import './Collectable.css';

class Collectable extends Component {
  constructor(props) {
    super(props);
    // Generate random position
    const pos = Math.floor(Math.random() * 10);
    this.obstacleFalling = setInterval(() => this.fall(), 150)
    this.state = {
      posX: pos*10,
      posY: -10,
    }
  }

  componentWillUnmount() {
    clearInterval(this.obstacleFalling);
  }

  fall() {
    const { posX, posY } = this.state;
    const newPosY = posY + 5;
    this.setState({ posY: newPosY });
    if (newPosY >= 100) {
      const { destroyCollectable, index } = this.props;
      destroyCollectable(index);
    }
    const { getItemPos, type, index } = this.props;
    getItemPos(posX, posY, type, index);
  }

  render() {
    const { type } = this.props;
    const { posX, posY } = this.state;
    return (
      <div
        className="Collectable"
        style={{
          top: `${posY}%`,
          left: `${posX}%`,
          backgroundImage: `url(assets/collectables/${type}.png)`,
        }}
      />
    );
  }
}

export default Collectable;
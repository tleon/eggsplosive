import React, { Component } from 'react';

class Collectable extends Component {
  constructor(props) {
    super(props);
    // Generate random position
    const pos = Math.floor(Math.random() * 100);
    this.state = {
      posX: pos,
      posY: 10,
    }
  }

  componentDidMount() {

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
        }}
      >
        <img src={`./assets/collectables/${type}.png`} alt={type} />

      </div>
    );
  }
}

export default Collectable;
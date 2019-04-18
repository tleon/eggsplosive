import React, { Component } from 'react';
import Collectable from './Collectable';
import Player from './Player';
import Infos from './Infos';
import Obstacles from './Obstacles';

class Game extends Component {
  constructor(props) {
    super(props);
    this.obstacleSpeedGeneration = 1000;
    this.collectables = ["egg", "milk", "chocolate"];
    this.state = {
      collectables: [],
    }
  }

  componentDidMount() {
    this.gameRunning = setInterval(
      () => this.generateCollectable()
      , this.collectablespeedGeneration);
  }

  generateCollectable() {
    const { collectables } = this.state;
    collectables.push(this.collectables[Math.floor(Math.random() * this.collectables.length)]);
    this.setState({ collectables });
  }

  destroyCollectable(index) {
    const { collectables } = this.state;
    collectables.slice(index, 1);
    this.setState({ collectables });
  }

  render() {
    const { collectables } = this.state;
    return (
      <div className="Game">
        {
          collectables.map((collectable, index) =>( 
            collectable[index] !== "" ?
                <Collectable type={collectable} key={`obstacleId-${index}`} checkGameOver={this.checkGameOver} />
                : null
            ))
        }
        <Player />
        <Infos />
        <Obstacles />
      </div>
    );
  }
}

export default Game;

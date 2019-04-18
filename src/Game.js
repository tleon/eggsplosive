import React, { Component } from 'react';
import Player from './Player';
import Collectable from './Collectable';
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
      , this.obstacleSpeedGeneration);
  }

  generateCollectable() {
    const { collectables } = this.state;
    collectables.push(this.collectables[Math.floor(Math.random() * this.collectables.length)]);
    this.setState({ collectables });
  }

  destroyCollectable = (index) => {
    console.log('destroyed')
    const { collectables } = this.state;
    collectables[index]="";
    this.setState({ collectables });
  }

  render() {
    const { collectables } = this.state;
    return (
      <div className="Game">
        {
          collectables.map((collectable, index) =>( 
            collectable !== "" ?
                <Collectable type={collectable} index={index} key={`obstacleId-${index}`} destroyCollectable={this.destroyCollectable} />
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

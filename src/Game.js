import React, { Component } from 'react';
import Player from './Player';
import Collectable from './Collectable';
import Infos from './Infos';
import Obstacles from './Obstacles';

class Game extends Component {

  render() {
    return (
      <div className="App">
        <Player />
        <Collectable />
        <Infos />
        <Obstacles />
      </div>
    );
  }
}

export default Game;
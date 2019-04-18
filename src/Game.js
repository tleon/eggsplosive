import React, { Component } from 'react';
import Player from './Player';
import Collectable from './Collectable';
import Infos from './Infos';
import Obstacles from './Obstacles';
import './Game.css';

class Game extends Component {

  render() {
    return (
      <div className="Game">
        <Player />
        <Collectable />
        <Infos />
        <Obstacles />
      </div>
    );
  }
}

export default Game;
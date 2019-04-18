import React, { Component } from 'react';
import './Game.css';
import Infos from './Infos'

class Game extends Component {

  render() {
    return (
      <div className="Game">
      <Infos />
      </div>
    );
  }
}

export default Game;
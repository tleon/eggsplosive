import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GameOver.css';

class GameOver extends Component {
  render() {
    return (
      <div className="GameOver">
        <div className="modal-wrapper">
          <div className="modal-body">
            <h1>Game Over !</h1>
            <Link to="/" >
              <button
                className="gameOver"
                type="button">
                Back to menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GameOver;
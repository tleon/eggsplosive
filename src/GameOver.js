import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './GameOver.css';

class GameOver extends Component {
  render() {
    return (
      <div className="GameOver">
        <div className="modal-wrapper">
          <div className="modal-body">
            <p>
              <h1>Game Over !</h1>
                  <Link exact to="/" >
                      <button
                        className="gameOver"
                        type="button">
                        Back to menu
                      </button>
                  </Link>
             </p> 
          </div>
        </div>
      </div>
    );
  }
}

export default GameOver;
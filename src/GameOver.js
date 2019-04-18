import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameOver extends Component {
  render() {
    return (
      <div className="GameOver">
        <p>
          <Link exact to="/" >
            <button
              type="button"
            >
              Back to menu
            </button>
          </Link>
        </p>
      </div>
    );
  }
}

export default GameOver;
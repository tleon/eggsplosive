import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 50,
      y: 80,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.move, false);
  }

  move=event =>{
    if (event.keyCode === 37) {
      let { x } = this.state
      x -= 10
      this.setState({ x })
      console.log(this.state.x)
    }
    if (event.keyCode === 39) ; 
  }

  render() {
    return (
      <div className="Player">


      </div>
    );
  }
}

export default Player;
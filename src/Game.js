import React, { Component } from 'react';
import Player from './Player';
import Collectable from './Collectable';
import BadCollectable from './BadCollectable';
import Infos from './Infos';
import Obstacles from './Obstacles';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.obstacleSpeedGeneration = 1000;
    this.badObstacleSpeedGeneration = 1000;
    this.collectables = ["egg", "milk", "chocolate"];
    this.badCollectables = ["bomb"];
    this.state = {
      collectables: [],
      badCollectables: [],
    }
  }

  componentDidMount() {
    this.collectablesSpawning = setInterval(
      () => this.generateCollectable()
      , this.obstacleSpeedGeneration);
    this.badCollectablesSpawning = setInterval(
      () => this.generateBadCollectable()
      , this.badObstacleSpeedGeneration);
    this.difficultyIncreasing = setInterval(
      () => this.increaseDifficulty()
      , 5000);
  }

  componentWillUnmount() {
    clearInterval(this.collectablesSpawning);
    clearInterval(this.badCollectablesSpawning);
  }

  increaseDifficulty() {
    if (this.badObstacleSpeedGeneration > 200) {
      this.badObstacleSpeedGeneration -= 100;
      clearInterval(this.badCollectablesSpawning);
      this.badCollectablesSpawning = setInterval(
        () => this.generateBadCollectable()
        , this.badObstacleSpeedGeneration);
    }
  }

  generateCollectable() {
    const { collectables } = this.state;
    collectables.push(this.collectables[Math.floor(Math.random() * this.collectables.length)]);
    this.setState({ collectables });
  }

  generateBadCollectable() {
    const { badCollectables } = this.state;
    badCollectables.push(this.badCollectables[Math.floor(Math.random() * this.badCollectables.length)]);
    this.setState({ badCollectables });
  }

  destroyCollectable = (index) => {
    const { collectables } = this.state;
    collectables[index] = "";
    this.setState({ collectables });
  }

  destroyBadCollectable = (index) => {
    const { badCollectables } = this.state;
    badCollectables[index] = "";
    this.setState({ badCollectables });
  }

  render() {
    const { collectables, badCollectables } = this.state;
    return (
      <div className="Game">
        {
          collectables.map((collectable, index) => (
            collectable !== "" ?
              <Collectable type={collectable} index={index} key={`collectableId-${index}`} destroyCollectable={this.destroyCollectable} />
              : null
          ))
        }
        {
          badCollectables.map((badCollectable, index) => (
            badCollectable !== "" ?
              <BadCollectable type={badCollectable} index={index} key={`badCollectable-${index}`} destroyBadCollectable={this.destroyBadCollectable} />
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

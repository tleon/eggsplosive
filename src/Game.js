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
    this.playerX = 50;
    this.playerY = 80;
    this.state = {
      collectables: [],
      badCollectables: [],
      eggs: 0,
      chocolates: 0,
      milk: 0,
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
    if (this.badObstacleSpeedGeneration > 100) {
      this.badObstacleSpeedGeneration -= 100;
      clearInterval(this.badCollectablesSpawning);
      this.badCollectablesSpawning = setInterval(
        () => this.generateBadCollectable()
        , this.badObstacleSpeedGeneration);
    }
  }

  getPlayerPos = (x, y) => {
    this.playerX = x;
    this.playerY = y;
  }

  getItemPos = (x, y, type) => {
    if (this.playerX === x && this.playerY === y) {
      switch (type) {
        case 'egg': {
          const { eggs } = this.state;
          this.setState({ eggs: eggs + 1 })
          break;
        }
        case 'milk': {
          const { milk } = this.state;
          this.setState({ milk: milk + 1 })
          break;
        }
        case 'chocolate': {
          const { chocolates } = this.state;
          this.setState({ chocolates: chocolates + 1 })
          break;
        }
        default: {
          this.setState({ gameOver: true });
        }
      }
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
    const { collectables, badCollectables, eggs, milk, chocolates } = this.state;
    return (
      <div className="Game">
        {
          collectables.map((collectable, index) => (
            collectable !== "" ?
              <Collectable
                type={collectable}
                index={index}
                key={`collectableId-${index}`}
                destroyCollectable={this.destroyCollectable}
                getItemPos={this.getItemPos}
              />
              : null
          ))
        }
        {
          badCollectables.map((badCollectable, index) => (
            badCollectable !== "" ?
              <BadCollectable
                type={badCollectable}
                index={index}
                key={`badCollectable-${index}`}
                destroyBadCollectable={this.destroyBadCollectable}
                getItemPos={this.getItemPos}
              />
              : null
          ))
        }
        <Player getPlayerPos={this.getPlayerPos} />
        <Infos eggs={eggs} milk={milk} chocolates={chocolates} />
        <Obstacles />
      </div>
    );
  }
}

export default Game;

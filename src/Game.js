import React, { Component } from 'react';
import Player from './Player';
import Collectable from './Collectable';
import BadCollectable from './BadCollectable';
import Bunny from './Bunny';
import Infos from './Infos';
import Obstacles from './Obstacles';
import GameOver from './GameOver';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.easterEgg = this.easterEgg.bind(this);
    this.obstacleSpeedGeneration = 1000;
    this.badObstacleSpeedGeneration = 1000;
    this.collectables = ["egg", "milk", "chocolate"];
    this.badCollectables = ["bomb"];
    this.bunnies = ["bunny"];
    this.playerX = 50;
    this.playerY = 70;
    this.easterEggWord = "";
    this.bunniesCounter = 0;
    this.state = {
      gameOver: false,
      collectables: [],
      badCollectables: [],
      bunnies: [],
      eggs: 0,
      chocolates: 0,
      milk: 0,
      activeEasterEgg: false,
    }
  }

  componentWillMount() {
    document.addEventListener('keydown', this.easterEgg, false)
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

  easterEgg(event) {
    if (event.keyCode === 80) {
      this.easterEggWord += "p"
    }
    if (this.easterEggWord === "p" && event.keyCode === 65) {
      this.easterEggWord += "a"
    }
    if (this.easterEggWord === "pa" && event.keyCode === 81) {
      this.easterEggWord += "q"
    }
    if (this.easterEggWord === "paq" && event.keyCode === 85) {
      this.easterEggWord += "u"
    }
    if (this.easterEggWord === "paqu" && event.keyCode === 69) {
      this.easterEggWord += "e"
    }
    if (this.easterEggWord === "paque" && event.keyCode === 83) {
      this.easterEggWord += "s"
    }
    if (this.easterEggWord === "paques") {
      this.bunniesCounter = 0;
      this.bunniesSpawning = setInterval(
        () => this.generateBunnies()
        , 500);
      this.easterEggWord = "";
      this.setState({ activeEasterEgg: true })

    }
  }


  sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    }
    this.stop = function () {
      this.sound.pause();
    }
  }

  stopGame() {
    clearInterval(this.collectablesSpawning);
    clearInterval(this.badCollectablesSpawning);
    clearInterval(this.difficultyIncreasing);
    clearInterval(this.bunniesSpawning);
    const { eggs, chocolates, milk } = this.state;
    if (!localStorage.getItem("eggs") && !localStorage.getItem("chocolates") && !localStorage.getItem("milk")) {
      localStorage.setItem("eggs", "0");
      localStorage.setItem("chocolates", "0");
      localStorage.setItem("milk", "0");
    }
    if (localStorage.getItem("eggs") && localStorage.getItem("chocolates") && localStorage.getItem("milk")) {
      let stockedEggs = parseInt(localStorage.getItem("eggs")) + eggs;
      localStorage.setItem("eggs", stockedEggs.toString());
      let stockedChocolates = parseInt(localStorage.getItem("chocolates")) + chocolates;
      localStorage.setItem("chocolates", stockedChocolates.toString());
      let stockedMilk = parseInt(localStorage.getItem("milk")) + milk;
      localStorage.setItem("milk", stockedMilk.toString());
    }
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

  getItemPos = (x, y, type, index) => {
    if (this.playerX === x && this.playerY === y - 15) {
      switch (type) {
        case 'egg': {
          const { eggs } = this.state;
          this.setState({ eggs: eggs + 1 })
          this.destroyCollectable(index)
          break;
        }
        case 'milk': {
          const { milk } = this.state;
          this.setState({ milk: milk + 1 })
          this.destroyCollectable(index)
          break;
        }
        case 'chocolate': {
          const { chocolates } = this.state;
          this.setState({ chocolates: chocolates + 1 })
          this.destroyCollectable(index)
          break;
        }
        default: {
          this.setState({ gameOver: true });
          this.stopGame();
          break;
        }
      }
    }
  }

  generateBunnies() {
    this.bunniesCounter += 1
    if (this.bunniesCounter === 10) {
      clearInterval(this.bunniesSpawning)
    }
    const { bunnies } = this.state;
    bunnies.push("bunny");
    this.setState({ bunnies });
    const mySound = new this.sound("bahhhhh.mp3");
    mySound.play();

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

  destroyBunny = (index) => {
    const { bunnies } = this.state;
    bunnies[index] = "";
    this.setState({ bunnies });
  }

  destroyBadCollectable = (index) => {
    const { badCollectables } = this.state;
    badCollectables[index] = "";
    this.setState({ badCollectables });
  }

  render() {
    const { collectables, badCollectables, bunnies, eggs, milk, chocolates, gameOver } = this.state;
    return (
      <div className="Game">
        {
          gameOver
            ?
            <GameOver />
            : null
        }
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
        {
          bunnies.map((bunny, index) => (
            bunny !== "" ?
              <Bunny
                type={bunny}
                index={index}
                key={`bunnyId-${index}`}
                destroyBunny={this.destroyBunny}
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

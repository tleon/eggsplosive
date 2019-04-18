import React, { Component } from 'react';
import ChooseCharacter from './ChooseCharacter';
import Kitchen from './Kitchen';
import Collection from './Collection';

class Home extends Component {

  render() {
    return (
      <div className="App">
        <ChooseCharacter />
        <Kitchen />
        <Collection />
      </div>
    );
  }
}

export default Home;
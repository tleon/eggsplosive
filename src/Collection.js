import React, { Component } from 'react';
import EggCollection from './EggCollection';
import CharactersCollection from './CharactersCollection';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import './Collections.css';


class Collection extends Component {
  render() {

    return (
      <div>
        <div className="row d-flex justify-content-center" style={{ margin: "30px" }}>
          <h1>Collection</h1>
        </div>
        <EggCollection></EggCollection>

      </div>
    );
  }
}

export default Collection;
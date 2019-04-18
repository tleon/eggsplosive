import React, { Component } from 'react';
import EggCollection from './EggCollection';
import CharactersCollection from './CharactersCollection';
import { Tabs, Tab } from 'react-bootstrap-tabs';


class Collection extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div>
        <div className="row d-flex justify-content-center" style={{ margin: "30px" }}>
          <h1>Collection</h1>
        </div>

        <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
          <Tab label="Eggs">
            <div className="row" style={{ marginTop: "50px" }}>
              <EggCollection></EggCollection>
            </div>

          </Tab>
          <Tab label="Characters">
            <div className="row" style={{ marginTop: "50px" }}>
              <CharactersCollection></CharactersCollection>
            </div>
          </Tab>
        </Tabs>

      </div>
    );
  }
}

export default Collection;
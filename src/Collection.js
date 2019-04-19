import React, { Component } from 'react';
import EggCollection from './EggCollection';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Collections.css';


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
        <EggCollection></EggCollection>
        <Nav.Item>
            <NavLink to="/"><button className="button-home" style={{position :'absolute', top : '0', right : '0'}}>Back</button></NavLink>
          </Nav.Item>
      </div>

    );
  }
}

export default Collection;
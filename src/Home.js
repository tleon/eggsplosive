import React, { Component } from 'react';
import ChooseCharacter from './ChooseCharacter';
import Kitchen from './Kitchen';
import Collection from './Collection';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

class Home extends Component {

  render() {
    return (
      <div>
        <Nav>
          <Nav.Item>
            <NavLink to="/"><button>Home</button></NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Collection"><button>Collection</button></NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Kitchen"><button>Kitchen</button></NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Game"><button>Game</button></NavLink>
          </Nav.Item>
        </Nav>

      </div>
    );
  }
}

export default Home;
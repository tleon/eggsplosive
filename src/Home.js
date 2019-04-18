import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Home.css'

class Home extends Component {

  render() {
    return (
      <div>
        <Nav>
          <table>
            <tr>
              <td>
          <Nav.Item>
            <NavLink to="/Collection"><button className="buttonPrincipal">Collection</button></NavLink>
          </Nav.Item>
              </td>
              <td>
          <Nav.Item>
            <NavLink to="/Kitchen"><button className="buttonPrincipal">Kitchen</button></NavLink>
          </Nav.Item>
              </td>
          </tr>
          </table>
        </Nav>
      <h1>Welcome To Eggsplosive</h1>
      <NavLink to="/Game"><img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Easter-Pictures-PNG/Sky_Blue_Easter_Egg_with_Flowers_and_Yellow_Bow_PNG_Picture.png?m=1434276674" type="button"/></NavLink>
      </div>
    );
  }
}

export default Home;
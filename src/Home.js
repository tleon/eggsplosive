import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Home.css'
import { MDBCol, Row } from 'mdbreact';


class Home extends Component {

  render() {
    return (
      <div>
        <Nav>
        <Row>
          <MDBCol lg="6">
          <Nav.Item>
            <NavLink to="/Collection"><button className="button-home">Collection</button></NavLink>
          </Nav.Item>
          </MDBCol>
          <MDBCol lg="6" className="d-flex justify-content-end">
            
          <Nav.Item>
            <NavLink to="/Kitchen"><button className="button-home">Kitchen</button></NavLink>
          </Nav.Item>
          </MDBCol>

        </Row>
        </Nav>
      <h1 className="h1-egg">Welcome To Eggsplosive</h1>
      <NavLink to="/Game"><img  alt="coucou" className="img-egg" src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Easter-Pictures-PNG/Sky_Blue_Easter_Egg_with_Flowers_and_Yellow_Bow_PNG_Picture.png?m=1434276674" type="button"/></NavLink>
      </div>
    );
  }
}

export default Home;
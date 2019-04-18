import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './GameOver.css';

class GameOver extends Component {
  render() {
    return (
      <div className="GameOver">
        <div className="modal-wrapper">
          <div className="modal-body">
            <p>
              <h1>Game Over !</h1>
              <Container>
                <Row>
                  <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Link exact to="/" >
                      <button
                        className="button"
                        type="button"
                      >
                        Back to menu
                      </button>
                    </Link>
                  </Col>
                </Row>
              </Container>


            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GameOver;
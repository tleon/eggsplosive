import React, { Component } from 'react';
import axios from 'axios';
import { Col, CardBody, CardTitle, CardText, Card, CardImage, Row, Container } from "reactstrap";


class EggCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eggs: [],
      border: {
        'junk': '#4B515D',
        'basic': '#33b5e5',
        'fine': '#00C851',
        'rare': '#ffbb33',
        'legendary': '#FF8800',
        'exotic': '#9933CC',
        'masterwork': '#CC0000',
        'ascended': '#c0ca33'
      }
    }
    this.getEggs();

  }
  getEggs = () => {
    axios.get('http://easteregg.wildcodeschool.fr/api/eggs').then(r => {
      const eggs = r.data;
      this.setState({ eggs });
    })
  }
  

  render() {
    const { eggs } = this.state;
    const { border } = this.state;
    return (
      <div className="App">
  
        <Container>
          
          {eggs.map((egg, index) =>
              <Col md="3" lg="3" style={{ marginBottom: "10px" }}>
                <Card style={{ width: "22rem", border: `5px solid ${border[egg.rarity]}` }}>
                  <Row>
                    <img style={{ width: "7rem" }} className="img-fluid" key={`img-${index}`} src={egg.image} waves />
                    </Row>
                  <CardBody>
                    <CardTitle key={`name-${index}`}>{egg.name}</CardTitle>
                    <CardText>
                      {egg.power}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
          )}
     
        </Container>

      </div>
    );
  }
}

export default EggCollection;
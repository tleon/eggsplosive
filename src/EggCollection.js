import React, { Component } from 'react';
import axios from 'axios';
import { MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBCard, MDBCardImage } from "mdbreact";


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
      <div className="App container-fluid">
        <div className="row">
          {eggs.map((egg, index) =>
            <div className="col-3">
              <MDBCol style={{ marginBottom: "10px" }}>
                <MDBCard style={{ width: "22rem", border: `5px solid ${border[egg.rarity]}` }}>
                  <div className="row d-flex justify-content-center">
                    <MDBCardImage style={{ width: "7rem" }} className="img-fluid" key={`img-${index}`} src={egg.image} waves />
                  </div>
                  <MDBCardBody>
                    <MDBCardTitle key={`name-${index}`}>{egg.name}</MDBCardTitle>
                    <MDBCardText>
                      {egg.power}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>
          )}
        </div>

      </div>
    );
  }
}

export default EggCollection;
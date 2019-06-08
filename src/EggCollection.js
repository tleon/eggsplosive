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
      }, 
      myEggs: []
    }
    this.getEggs();

  }
  componentWillMount() {
    if(!localStorage.getItem("collection")){
      localStorage.setItem('collection', "");
    }
    if(!localStorage.getItem("eggs")){
      localStorage.setItem('eggs', "");
    }
    if(!localStorage.getItem("chocolates")){
      localStorage.setItem('chocolates', "");
    }
    if(!localStorage.getItem("milk")){
      localStorage.setItem('milk', "");
    }
  }
  getEggs = () => {
    axios.get('https://tours.wilders.dev/api/eggs').then(r => {
      const eggs = r.data;
      this.setState({ eggs });
    })
  }
  getMyEggs = () => {
    return localStorage.getItem('collection').split(" ");
    
  }

  isInMyCollection = (egg) => {
    const myEggsId = this.getMyEggs();
    return myEggsId.indexOf(egg.$loki + "") === -1;
  }
  

  render() {
    const { eggs, border } = this.state;
    console.log(this.getMyEggs().length)
    return (
      <div className="App container-fluid">
        <h2>{this.getMyEggs().length - 1} / 100</h2>
        <div className="row">
          {eggs.map((egg, index) =>
            <div key={index} className="col-3">
              <MDBCol style={{ marginBottom: "10px" }}>
                <MDBCard style={{ width: "22rem", border: `5px solid ${border[egg.rarity]}`, filter: `grayscale(${this.isInMyCollection(egg) ? '1' : '0'})` }}>
                  <div className="row d-flex justify-content-center">
                    <MDBCardImage style={{ width: "7rem" }} className="img-fluid" key={`img-${index}`} src={egg.image} waves />
                  </div>
                  <MDBCardBody>
                    <MDBCardTitle key={`name-${index}`}>{egg.name}</MDBCardTitle>
                    <MDBCardText>
                      Rarity : {egg.rarity}
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
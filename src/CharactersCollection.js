import React, { Component } from 'react';
import axios from 'axios';
import { MDBCol, MDBCardBody, MDBCardTitle, MDBCardText, MDBCard, MDBCardImage } from "mdbreact";


class CharactersCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
    }
    this.getCharacters();

  }
  getCharacters = () => {
    axios.get('http://easteregg.wildcodeschool.fr/api/characters').then(r => {
      const characters = r.data;
      this.setState({ characters });
    })
  }

  render() {
    const { characters } = this.state;
    const { border } = this.state;
    return (
      <div className="App container-fluid">

        <div className="row">
          {characters.map((character, index) =>
            <div className="col-3">
              <MDBCol style={{ marginBottom: "10px" }}>
                <MDBCard style={{ width: "22rem"}}>
                  <div className="row d-flex justify-content-center">
                    <MDBCardImage style={{ width: "7rem" }} className="img-fluid" key={`img-${index}`} src={character.image} waves />
                  </div>
                  <MDBCardBody>
                    <MDBCardTitle key={`name-${index}`}>{character.name}</MDBCardTitle>
                    <MDBCardText>
                      {character.gender} from {character.origin}
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

export default CharactersCollection;
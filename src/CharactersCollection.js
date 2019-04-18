import React, { Component } from 'react';
import axios from 'axios';


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
    return (
      <div className="App container-fluid">
        <div className="row">
          {characters.map((character, index) =>
            <div className="col-3">
              <div className="col" style={{ marginBottom: "10px" }}>
                <div className="card" style={{ width: "22rem"}}>
                  <div className="row d-flex justify-content-center">
                    <div className="card-img img-fluid" style={{ width: "7rem" }} key={`img-${index}`} src={character.image} waves />
                  </div>
                  <div className="card-body">
                    <div className="card-title" key={`name-${index}`}>{character.name}</div>
                    <div className="card-text">
                      <span key={`gender-${index}`}>{character.gender}</span> from <span key={`origin-${index}`}>{character.origin}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CharactersCollection;
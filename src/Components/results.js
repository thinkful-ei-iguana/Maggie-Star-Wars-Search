import React, { Component } from 'react';
import EachCharacter from './eachCharacter';
import cuid from 'cuid';

class Results extends Component {

  render() {
    return (
      <ul className="results-list">
        {this.props.characters.results.map((character) =>
          <EachCharacter key={cuid()}
            name={character.name}
            birthyear={character.birth_year}
            starships={character.starships}
            films={character.films}
          />)
        }
      </ul>
    )
  }
}
//name={character[index].name}
Results.defaultProps = {
  characters: {
    results: []
  }
}


export default Results;


import React, { Component } from 'react';
import EachCharacter from './eachCharacter';
import cuid from 'cuid';

class Results extends Component {

  render() {
    console.log(this.props);
    return (
      <ul className="results-list">
        {this.props.characters.results.map((character) =>
          <EachCharacter key={cuid()}
            name={character.name}
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


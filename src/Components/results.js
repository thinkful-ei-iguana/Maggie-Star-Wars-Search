import React from 'react';
import EachCharacter from './eachCharacter';

function Results(props) {
  console.log(props);
  return (
    <ul className="results-list">
      {props.characters.map((name, index) => {
        return (
          <EachCharacter key={index}
            name={props.characters[index].name}
          />
        )
      })}
    </ul>
  )
}


export default Results;
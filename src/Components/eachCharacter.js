import React, { Component } from 'react';
import './eachCharacter.css';

class EachCharacter extends Component {

  render() {
    return (
      <div className="character-result">
        <h3>Name: {this.props.name}</h3>
        <p>Birthyear: {this.props.birthyear}</p>
      </div>
    )
  }
}

export default EachCharacter;
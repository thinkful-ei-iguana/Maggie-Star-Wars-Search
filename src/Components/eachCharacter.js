import React, { Component } from 'react';
import './eachCharacter.css';

class EachCharacter extends Component {

  render() {
    return (
      <div className="character-result">
        <h3>Name: {this.props.name}</h3>
      </div>
    )
  }
}

export default EachCharacter;
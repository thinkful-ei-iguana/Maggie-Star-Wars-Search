import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Search from './Components/search';
import Results from './Components/results';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  render() {
    return (
      <div id="main-container">
        <Header />
        <Search handleSubmit={this.handleSubmit} />
        <Results characters={this.state.characters} />
      </div>
    );
  }
}

export default App;

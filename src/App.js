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

  settingState = (input) => {
    console.log('input is:', input);
    // this.setState({
    //   characters: 'batman'
    // })
  }

  // handleSubmitAPI = (name) => {
  // const API_KEY = 10100353418259455;
  // let urlName = encodeURIComponent(name);
  //   const url = `https://superheroapi.com/api/{API_KEY}/search/{urlName}`

  // }

  render() {
    return (
      <div id="main-container">
        <Header />
        <Search handleSubmit={this.handleSubmit} settingState={this.settingState} />
        <Results characters={this.state.characters} />
      </div>
    );
  }
}

export default App;

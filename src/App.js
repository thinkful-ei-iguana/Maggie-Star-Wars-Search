import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
import Search from './Components/search';
import Results from './Components/results';
import ResultsError from './Components/resultsError';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: {
        results: []
      },
    }
    console.log(this.state)
  }

  // fetchResults = (input) => {
  //   console.log('input is:', input);
  //   this.setState({
  //     characters: input
  //   })
  //   console.log('state is now:', this.state);
  // }
  // `https://cors-anywhere.herokuapp.com/https://swapi.co/api/`

  handleSubmitAPI = (name) => {
    // e.preventDefault();
    console.log('at handleSubmit, name is:', name);

    let encodeName = encodeURIComponent(name.name);

    console.log('encoded name is,', encodeName);
    const url = `https://swapi.co/api/people/?search=${encodeName}`

    console.log('full url is:', url);

    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Something is not right")
        }
        return response;
      })
      .then(response => response.json())

      .then(data => {
        const characterResults = data;
        console.log("characterdata is", characterResults)
        this.setState({ results: characterResults })
      })
      .catch(err => console.log('Error caught', err))

  }

  render() {
    return (
      <div id="main-container">
        <Header key="fawfaw" />
        <ResultsError>
          <Search key="19293" handleSubmit={(e) => this.handleSubmitAPI(e)} />
          <Results key="19erw" characters={this.state.results} />
        </ResultsError>
      </div>
    );
  }
}


export default App;

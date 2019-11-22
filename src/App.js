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
  }

  handleSubmitAPI = (name) => {

    let encodeName = encodeURIComponent(name.name);
    const url = `https://swapi.co/api/people/?search=${encodeName}`

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

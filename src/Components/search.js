import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: "",
        touched: false
      },
      error: null
    };
  }

  setStateName = name => {
    this.setState({
      name: {
        value: name,
        touched: true
      }
    });
  };

  validateInput = () => {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Character name is required";
    }
  }

  consolidateInputAPI = e => {
    e.preventDefault();
    let input = {
      name: `${this.state.name.value}`
    };
    console.log('consolidated name info is', input);
    this.props.settingState(input);
  }

  render() {
    return (
      <form
        id="search"
        onSubmit={e => this.consolidateInputAPI(e)}>
        <label htmlFor="search-field">
          <input
            id="search-field"
            name="character"
            placeholder="Batman"
            onChange={e => this.setStateName(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="submit-button"
          disabled={this.validateInput()}
        >
          Pow!
        </button>
      </form>
    )
  }
}

export default Search;
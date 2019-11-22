import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  render() {
    return (
      <form id="search">
        <label forHtml="search-field">
          <input
            id="search-field"
            name="character"
            placeholder="Yoda"
          />
        </label>
        <button type="submit">Warp Speed!</button>
      </form>
    )
  }
}

export default Search;
import React, { Component } from "react";

class ResultsError extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {

    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Could not display results.</h2>
          <button>Back</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ResultsError
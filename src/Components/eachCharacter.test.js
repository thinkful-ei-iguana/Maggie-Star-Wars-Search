import React from 'react';
import ReactDOM from 'react-dom';
import EachCharacter from './eachCharacter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EachCharacter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
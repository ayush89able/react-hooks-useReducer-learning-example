import React, { Component } from 'react';
import { render } from 'react-dom';
import Register from './Register';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Register/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

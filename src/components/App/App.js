import React, { Component } from 'react';

import catImg from './assets/cat.png';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='greeting'>
        <img alt='' src={catImg} />
        <h1>There you go!!</h1>
      </div>
    );
  }
}

export default App;
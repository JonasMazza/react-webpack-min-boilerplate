import React from 'react';

import catImg from './assets/cat.png';
import './styles/App.css';

const App = () => (
  <div className="greeting">
    <img alt="" src={catImg} />
    <h1>There you go!!</h1>
  </div>
);

export default App;

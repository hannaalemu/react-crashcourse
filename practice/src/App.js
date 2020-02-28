import React, { Component } from 'react';

import ClassRoom from './components/classRoom';
import Temp from './components/pureComponent';
class App extends Component {

  render() {
    return (
      <div className="App" className="container">
      <ClassRoom />
      <Temp />
      </div>
    );
  }
}

export default App;

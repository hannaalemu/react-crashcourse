import React, { Component } from 'react';

import ClassRoom from './components/classRoom';
import addStudent from './components/addStudent';

class App extends Component {

  render() {
    return (
      <div className="App" className="container">
      <ClassRoom />
      </div>
    );
  }
}

export default App;

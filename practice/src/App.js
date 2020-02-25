import React, { Component } from 'react';

import Users from './components/users';
import AddUser from './components/input';

class App extends Component {

  render() {
    return (
      <div className="App" className="container">
       <Users></Users>
      <AddUser></AddUser>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

import SubTotal from './components/subtotal/subtotal';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 100
    };
  }
  render() {
  return (
    <div className="App" className="container">
      <Row className="purchase-card">
        <SubTotal price={this.state.total.toFixed(2)} />
      </Row>
    </div>
  );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">coloumn 1</div>
          <div className="col-6">coloumn 2</div>
        </div>
      </div>

    )
   
  }
}

export default App;

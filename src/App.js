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
          <div className="col-6">
            <i class="fas fa-2x fa-facebook"></i>
          </div>
          <div className="col-6">coloumn 1</div>

          <div className="col-6">
            <span>
              <i className="fas fa-home" />
            </span>
          </div>
        </div>
      </div>
    );
   
  }
}

export default App;

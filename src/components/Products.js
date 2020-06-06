import React, { Component } from 'react'
// import SingleProduct from './SingleProduct';
import Title from './Title';

export default class Products extends Component {
 
  state = {
     products: []
   };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="phones" />
            <div className="row" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

import React, { Component } from 'react'
// import SingleProduct from './SingleProduct';
import Title from './Title';
import { ourPhones } from '../data'

export default class Products extends Component {
 
  state = {
     phones: ourPhones
   };

  render() {
    console.log(this.state.phones)
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

import React, { Component } from 'react'
// import SingleProduct from './SingleProduct';
import Title from './Title';
import { ourPhones } from '../data'
import { PhoneConsumer, PhoneProvider } from '../context';

export default class Products extends Component {
 
  state = {
     phones: ourPhones
   };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="phones" />
            <div className="row">
              <PhoneConsumer>
                {(value) => {
                  console.log(value)
                }}
              </PhoneConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

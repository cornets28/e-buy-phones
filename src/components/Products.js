import React, { Component } from 'react'
import SingleProduct from './SingleProduct';
import Title from './Title';
import { PhoneConsumer } from '../context';

export default class Products extends Component {
 
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="phones" />
            <div className="row">
              <PhoneConsumer>
                {(value) => {
                  return value.phones.map( phone => {
                    return <SingleProduct key={phone.id} phone={phone} />
                  })
                }}
              </PhoneConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

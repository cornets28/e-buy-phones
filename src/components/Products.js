import React, { Component } from 'react'
import Product from './SingleProduct';

export default class Products extends Component {
  render() {
    return (
      <div>
        <h3 className="">All Products</h3>
        <Product />
      </div>
    )
  }
}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageNotFound />
        <Products />
        <SingleProduct />
        <ProductDetails />
        <Cart />
      </React.Fragment>
    );
   
  }
}

export default App;

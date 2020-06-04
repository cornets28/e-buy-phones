import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/product" component={SingleProduct} />
          <Route path="/details" component={ProductDetails} />
          <Route path="/carte" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
      </React.Fragment>
    );
   
  }
}

export default App;

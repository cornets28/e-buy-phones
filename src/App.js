import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import Modal from './components/Modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/product" component={SingleProduct} />
          <Route path="/details" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={PageNotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
   
  }
}

export default App;

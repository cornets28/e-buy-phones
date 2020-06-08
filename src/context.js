import React, { Component } from "react";
import { ourPhones, detailPhone } from "./data";

const PhoneContext = React.createContext();
// CONTEXT A=HAS 2 STEPS: 1. Provider AND 2.Consumer

class PhoneProvider extends Component {
  state = {
    phones: ourPhones,
    detailPhone,
  };
  detailHandler() {
    console.log("hello from detail handler");
  }

  addToCart() {
    console.log("hello from add to cart");
  }
  render() {
    return (
      <PhoneContext.Provider
        value={{
           ...this.state,
          detailHandler: this.detailHandler,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </PhoneContext.Provider>
    );
  }
}
const PhoneConsumer = PhoneContext.Consumer;

export { PhoneProvider, PhoneConsumer };

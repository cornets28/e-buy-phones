import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
// import CartTotals from "./CartTotals";
import { PhoneConsumer } from "../../context";
import EmptyCart from "./EmptyCart";

export default class Store extends Component {
  render() {
    return (
      <section>
        <PhoneConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  {/* <CartTotals value={value} history={this.props.history} /> */}
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </PhoneConsumer>
      </section>
    );
  }
}

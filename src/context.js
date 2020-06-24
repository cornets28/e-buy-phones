import React, { Component } from "react";
import { ourPhones, detailPhone } from "./data";

const PhoneContext = React.createContext();
// CONTEXT A=HAS 2 STEPS: 1. Provider AND 2.Consumer

class PhoneProvider extends Component {
  state = {
    phones: [],
    detailPhone: detailPhone,
    cart: ourPhones,
    modalIsOpen: false,
    modalPhone: detailPhone,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  // Get the copy of the data, instead of referencing (the original) them
  // also called 'DESTRUCTORING'
  componentDidMount() {
    this.setPhones();
  }
  setPhones = () => {
    let tempPhones = [];
    ourPhones.forEach((phone) => {
      const singlePhone = { ...phone };
      tempPhones = [...tempPhones, singlePhone];
    });
    this.setState({
      phones: tempPhones,
    });
  };
  // Get the copy of the data (ENDS HERE)

  getPhoneId = (id) => {
    return this.state.phones.find((phone) => phone.id === id);
  };

  detailHandler = (id) => {
    const phone = this.getPhoneId(id);
    this.setState(() => {
      return { detailPhone: phone };
    });
  };

  addToCart = (id) => {
    let tempPhones = [...this.state.phones];
    const index = tempPhones.indexOf(this.getPhoneId(id));
    const phone = tempPhones[index];
    phone.inCart = true;
    phone.count = 1;
    const price = phone.price;
    phone.total = price;

    this.setState(() => {
      return {
        phones: [...tempPhones],
        cart: [...this.state.cart, phone],
        detailphone: { ...phone },
      };
    });
  };

  openModal = (id) => {
    const phone = this.getPhoneId(id);
    this.setState(() => {
      return { modalPhone: phone, modalIsOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalIsOpen: false };
    });
  };

  increase = (id) => {
    console.log("Increment the value");
  };

  decrease = (id) => {
    console.log("decrement the value");
  };

  removePhone = (id) => {
    console.log("remove the phone");
  };

  clearCart = () => {
    console.log("clear cart methode");
  };

  render() {
    return (
      <PhoneContext.Provider
        value={{
          ...this.state,
          detailHandler: this.detailHandler,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increase: this.increase,
          decrease: this.decrease,
          removePhone: this.closeModal,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </PhoneContext.Provider>
    );
  }
}
const PhoneConsumer = PhoneContext.Consumer;

export { PhoneProvider, PhoneConsumer };

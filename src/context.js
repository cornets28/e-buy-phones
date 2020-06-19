import React, { Component } from "react";
import { ourPhones, detailPhone } from "./data";

const PhoneContext = React.createContext();
// CONTEXT A=HAS 2 STEPS: 1. Provider AND 2.Consumer

class PhoneProvider extends Component {
  state = {
    phones: [],
    detailPhone: detailPhone,
    cart: [],
    modalIsOpen: false,
    modalPhone: detailPhone,
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

  render() {
    return (
      <PhoneContext.Provider
        value={{
          ...this.state,
          detailHandler: this.detailHandler,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </PhoneContext.Provider>
    );
  }
}
const PhoneConsumer = PhoneContext.Consumer;

export { PhoneProvider, PhoneConsumer };

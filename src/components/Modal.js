import React, { Component } from "react";
import styled from "styled-components";
import { PhoneConsumer } from "../context";
import { BtnContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <PhoneConsumer>
        {(value) => {
          const { modalIsOpen, closeModal } = value;
          const { img, title, price } = value.modalPhone;
          if (!modalIsOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <h5>your add item in cart</h5>
                      <img src={img} className="img-fluid" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : ${price}</h5>
                      <Link to="/">
                        <BtnContainer
                          onClick={() => {
                            closeModal();
                          }}
                        >
                         Keep Shopping
                        </BtnContainer>
                      </Link>
                      <Link to="/cart">
                        <BtnContainer
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </BtnContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </PhoneConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--defaultWhite);
  }
`;

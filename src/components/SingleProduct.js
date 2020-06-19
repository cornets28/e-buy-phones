/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PhoneConsumer } from "../context";
import PropTypes from 'prop-types'; 

export default class SingleProduct extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.phone;
    return (
      <PhoneWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <PhoneConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => {
                  value.detailHandler(id);
                }}
              >
                <Link to="/details">
                  <img src={img} alt="Phone image" className="card-img-top" />
                </Link>
                <button
                  className="cart-button"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </PhoneConsumer>

          {/* the cart footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-pink font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </PhoneWrapper>
    );
  }
}

SingleProduct.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const PhoneWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    transition: all 1s linear;
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(248, 248, 248);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    border: none;
    background: var(--defaulPink);
    font-size: 1.4rem;
    color: var(--defaultWhite);
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-button {
    transform: translate(0%, 0);
  }

  .cart-button:hover {
    color: var(--defaultLightYellow);
    cursor: pointer;
  }
`;

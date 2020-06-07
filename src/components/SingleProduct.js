/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PhoneConsumer } from "../context";

export default class SingleProduct extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.phone;
    return (
      <PhoneWrapper className="col-9 mx-auto col-md-6 col-lg-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={console.log("Clicked from the image coontainer!")}
          >
            <Link to="/details">
              <img src= {img} alt="Phone image" className="card-img-top" />
            </Link>
          </div>
        </div>
      </PhoneWrapper>
    );
  }
}

const PhoneWrapper = styled.div`
`;
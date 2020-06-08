import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PhoneConsumer } from "../context";
import { BtnContainer } from "./Button";

export default class ProductDetails extends Component {
  render() {
    return (
      <PhoneConsumer>
        {(value) => {
          console.log(value.detailPhone);
          const {
            id,
            title,
            img,
            price,
            company,
            info,
            inCart,
          } = value.detailPhone;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-pink my-5">
                  <h1 className="">{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="Detail phone" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3 className="">model: {title}</h3>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-pink">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mb-0 mt-3">
                    details related to this phone
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <Link to="/">
                    <BtnContainer>back to all phones</BtnContainer>
                  </Link>

                  <BtnContainer cart disabled={inCart ? true : false } onClick={value.addToCart(id)}>
                    {inCart? "in cart" : "add to cart" }
                  </BtnContainer>
                </div>
              </div>
            </div>
          );
        }}
      </PhoneConsumer>
    );
  }
}

import React from "react";
import { CheckoutItemProps } from "./CheckoutItemInterfaces";
import "./CheckoutItemStyles.scss";

const CheckoutItem = ({
  cartItem: { imageUrl, name, price, count },
}: CheckoutItemProps): JSX.Element => (
  <div className="checkoutItem">
    <div className="imageContainer">
      <img src={imageUrl} alt="item" />
    </div>

    <span className="name">{name}</span>

    <span className="quantity">{count}</span>

    <span className="price">${price}</span>

    <div className="removeButton">&#10005;</div>
  </div>
);

export default CheckoutItem;

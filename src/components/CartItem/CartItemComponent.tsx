import React from "react";
import { CartItemProps } from "./CartItemInterfaces";
import "./CartItemStyles.scss";

const CartItem = ({
  item: { imageUrl, price, name, count },
}: CartItemProps): JSX.Element => (
  <div className="cartItem">
    <img src={imageUrl} alt="item" />

    <div className="itemDetails">
      <span className="name">{name}</span>

      <span className="price">
        {count} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;

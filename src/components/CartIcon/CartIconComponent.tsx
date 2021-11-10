import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import "./CartIconStyles.scss";

const CartIcon = (): JSX.Element => (
  <div className="cartIcon">
    <ShoppingIcon className="shoppingIcon" />

    <span className="itemCount">0</span>
  </div>
);

export default CartIcon;

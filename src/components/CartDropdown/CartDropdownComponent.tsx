import React from "react";
import CustomButton from "../CustomButton/CustomButtonComponent";
import "./CartDropdownStyles.scss";

const CartDropdown = (): JSX.Element => (
  <div className="cartDropdown">
    <div className="cartItems" />

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;

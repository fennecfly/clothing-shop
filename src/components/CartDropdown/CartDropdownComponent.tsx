import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "../CartItem/CartItemComponent";
import CustomButton from "../CustomButton/CustomButtonComponent";
import { CartDropdownProps } from "./CartDropdownInterfaces";
import "./CartDropdownStyles.scss";

const CartDropdown = ({ cartItems }: CartDropdownProps): JSX.Element => (
  <div className="cartDropdown">
    <div className="cartItems">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton inverted={true}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { items } }: RootState) => ({
  cartItems: items,
});

export default connect(mapStateToProps)(CartDropdown);

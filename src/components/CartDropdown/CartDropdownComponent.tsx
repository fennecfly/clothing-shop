import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { toggleCartHiddenAction } from "../../redux/cart/cartActions";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import {
  MyMapDispatchToProps,
  MyMapStateToProps,
} from "../../redux/reducerInterfaces";
import CartItem from "../CartItem/CartItemComponent";
import CustomButton from "../CustomButton/CustomButtonComponent";
import {
  CartDropdownDispatchProps,
  CartDropdownProps,
  CartDropdownStateProps,
} from "./CartDropdownInterfaces";
import "./CartDropdownStyles.scss";

const CartDropdown = ({
  cartItems,
  history,
  toggleCartHidden,
  ...o
}: CartDropdownProps): JSX.Element => {
  console.log(o);
  return (
    <div className="cartDropdown">
      <div className="cartItems">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="emptyMessage">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          if (cartItems.length && history.location.pathname !== "/checkout") {
            toggleCartHidden();
            history.push("/checkout");
          }
        }}
        inverted={true}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps: MyMapDispatchToProps<CartDropdownDispatchProps> = (
  dispatch
) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

const mapStateToProps: MyMapStateToProps<CartDropdownStateProps> =
  createStructuredSelector({
    cartItems: selectCartItems,
  });

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);

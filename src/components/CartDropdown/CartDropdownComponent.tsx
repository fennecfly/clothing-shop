import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import CartItem from "../CartItem/CartItemComponent";
import CustomButton from "../CustomButton/CustomButtonComponent";
import { CartDropdownProps } from "./CartDropdownInterfaces";
import "./CartDropdownStyles.scss";

const CartDropdown = ({
  cartItems,
  history,
}: CartDropdownProps): JSX.Element => (
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
          history.push("/checkout");
        }
      }}
      inverted={true}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

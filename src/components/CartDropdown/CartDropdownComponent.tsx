import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { toggleCartHiddenAction } from "../../redux/cart/cartActions";
import { CartActionTypes } from "../../redux/cart/cartActionTypes";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { MyReducerAction } from "../../redux/reducerInterfaces";
import CartItem from "../CartItem/CartItemComponent";
import CustomButton from "../CustomButton/CustomButtonComponent";
import { CartDropdownProps } from "./CartDropdownInterfaces";
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

const mapDispatchToProps = (
  dispatch: Dispatch<
    MyReducerAction<CartActionTypes.ToggleCartHidden, undefined>
  >
) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);

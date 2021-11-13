import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartHiddenAction } from "../../redux/cart/cartActions";
import { CartActionTypes } from "../../redux/cart/cartActionTypes";
import { MyReducerAction } from "../../redux/reducerInterfaces";
import { CartIconProps } from "./CartIconInterfaces";
import "./CartIconStyles.scss";

const CartIcon = ({ toggleCartHidden }: CartIconProps): JSX.Element => (
  <div className="cartIcon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppingIcon" />

    <span className="itemCount">0</span>
  </div>
);

const mapDispatchToProps = (
  dispatch: Dispatch<
    MyReducerAction<CartActionTypes.ToggleCartHidden, undefined>
  >
) => ({ toggleCartHidden: () => dispatch(toggleCartHiddenAction()) });

export default connect(null, mapDispatchToProps)(CartIcon);

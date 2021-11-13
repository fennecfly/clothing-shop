import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartHiddenAction } from "../../redux/cart/cartActions";
import { CartActionTypes } from "../../redux/cart/cartActionTypes";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { MyReducerAction } from "../../redux/reducerInterfaces";
import { RootState } from "../../redux/store";
import { CartIconProps } from "./CartIconInterfaces";
import "./CartIconStyles.scss";

const CartIcon = ({
  toggleCartHidden,
  itemCount,
}: CartIconProps): JSX.Element => (
  <div className="cartIcon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppingIcon" />

    <span className="itemCount">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (
  dispatch: Dispatch<
    MyReducerAction<CartActionTypes.ToggleCartHidden, undefined>
  >
) => ({ toggleCartHidden: () => dispatch(toggleCartHiddenAction()) });

const mapStateToProps = (state: RootState) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartHiddenAction } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { MyMapDispatchToProps } from "../../redux/storeInterfaces";
import { CartIconDispatchProps, CartIconProps } from "./CartIconInterfaces";
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

const mapDispatchToProps: MyMapDispatchToProps<CartIconDispatchProps> = (
  dispatch
) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

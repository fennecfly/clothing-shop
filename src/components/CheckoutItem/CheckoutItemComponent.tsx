import React from "react";
import { connect } from "react-redux";
import { removeCartItemAction } from "../../redux/cart/cartActions";
import { MyMapDispatchToProps } from "../../redux/storeInterfaces";
import {
  CheckoutItemDispatchProps,
  CheckoutItemProps,
} from "./CheckoutItemInterfaces";
import "./CheckoutItemStyles.scss";

const CheckoutItem = ({
  removeCartItem,
  cartItem: { imageUrl, name, price, count, id },
}: CheckoutItemProps): JSX.Element => (
  <div className="checkoutItem">
    <div className="imageContainer">
      <img src={imageUrl} alt="item" />
    </div>

    <span className="name">{name}</span>

    <span className="quantity">{count}</span>

    <span className="price">${price}</span>

    <div onClick={() => removeCartItem(id)} className="removeButton">
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps: MyMapDispatchToProps<CheckoutItemDispatchProps> = (
  dispatch
) => ({
  removeCartItem: (id) => dispatch(removeCartItemAction(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

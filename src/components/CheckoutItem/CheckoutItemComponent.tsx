import React from "react";
import { connect } from "react-redux";
import {
  addCartItemAction,
  deleteCartItemAction,
  removeCartItemAction,
} from "../../redux/cart/cartActions";
import { MyMapDispatchToProps } from "../../redux/storeInterfaces";
import {
  CheckoutItemDispatchProps,
  CheckoutItemProps,
} from "./CheckoutItemInterfaces";
import "./CheckoutItemStyles.scss";

const CheckoutItem = ({
  deleteCartItem,
  removeCartItem,
  addCartItem,
  cartItem,
}: CheckoutItemProps): JSX.Element => {
  const { imageUrl, name, price, count, id } = cartItem;

  return (
    <div className="checkoutItem">
      <div className="imageContainer">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(id)}>
          &#10094;
        </div>

        <div className="value">{count}</div>

        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">${price}</span>

      <div onClick={() => deleteCartItem(id)} className="removeButton">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps: MyMapDispatchToProps<CheckoutItemDispatchProps> = (
  dispatch
) => ({
  deleteCartItem: (id) => dispatch(deleteCartItemAction(id)),
  removeCartItem: (id) => dispatch(removeCartItemAction(id)),
  addCartItem: (item) => dispatch(addCartItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

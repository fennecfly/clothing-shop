import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItemComponent";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";
import { MyMapStateToProps } from "../../redux/reducerInterfaces";
import {
  CheckoutPageProps,
  CheoutPageStateProps,
} from "./CheckoutPageInterfaces";
import "./CheckoutPageStyles.scss";

const CheckoutPage = ({ cartItems, total }: CheckoutPageProps): JSX.Element => (
  <div className="checkoutPage">
    <div className="checkoutHeader">
      <div className="headerBlock">
        <span>Product</span>
      </div>

      <div className="headerBlock">
        <span>Description</span>
      </div>

      <div className="headerBlock">
        <span>Quantity</span>
      </div>

      <div className="headerBlock">
        <span>Price</span>
      </div>

      <div className="headerBlock">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps: MyMapStateToProps<CheoutPageStateProps> =
  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
  });

export default connect(mapStateToProps)(CheckoutPage);

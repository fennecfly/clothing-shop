import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";
import { CheckoutPageProps } from "./CheckoutPageInterfaces";
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

    {cartItems.map((cartItem) => cartItem.name)}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

// const mapDispatchToProps = (
//   dispatch: Dispatch<
//     MyReducerAction<CartActionTypes.RemoveCartItem, number>
//   >
// ) => ({
//   removeCartItem: (id: number) => dispatch(remove(user)),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

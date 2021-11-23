import { CartActionTypes } from "./cartActionTypes";
import { CartReducer, CartState } from "./cartInterfaces";
import {
  addCartItemUtil,
  deleteCartItemUtil,
  removeCartItemUtil,
} from "./cartUtils";

const initialState: CartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer: CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ToggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.AddCartItem:
      return {
        ...state,
        cartItems: addCartItemUtil(state.cartItems, action.payload),
      };
    case CartActionTypes.DeleteCartItem:
      return {
        ...state,
        cartItems: deleteCartItemUtil(state.cartItems, action.payload),
      };
    case CartActionTypes.RemoveCartItem:
      return {
        ...state,
        cartItems: removeCartItemUtil(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

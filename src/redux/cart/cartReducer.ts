import { CartActionTypes } from "./cartActionTypes";
import { CartReducer, CartState } from "./cartInterfaces";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

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
    case CartActionTypes.SetCartHidden:
      return {
        ...state,
        hidden: action.payload,
      };
    case CartActionTypes.AddCartItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.RemoveCartItem:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

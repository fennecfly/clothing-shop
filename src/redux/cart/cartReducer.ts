import { CartActionTypes } from "./cartActionTypes";
import { CartReducer, CartState } from "./cartInterfaces";
import { addItemToCart } from "./cartUtils";

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
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

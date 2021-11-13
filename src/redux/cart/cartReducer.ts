import { CartActionTypes } from "./cartActionTypes";
import { CartReducer, CartState } from "./cartInterfaces";
import { addItemToCart } from "./cartUtils";

const initialState: CartState = {
  hidden: true,
  items: [],
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
        items: addItemToCart(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

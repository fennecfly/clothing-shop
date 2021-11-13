import { CartActionTypes } from "./cartActionTypes";
import { CartReducer, CartState } from "./cartInterfaces";

const initialState: CartState = {
  hidden: true,
};

const cartReducer: CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ToggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;

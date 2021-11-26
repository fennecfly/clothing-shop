import { collections } from "./shopData";
import { ShopReducer, ShopState } from "./shopInterfaces";

const initialState: ShopState = {
  collections,
};

const shopReducer: ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

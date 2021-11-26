import { Actions } from "../reducerInterfaces";
import { CollectionItem } from "../shopReducer/shopInterfaces";

export interface CartItem extends CollectionItem {
  count: number;
}

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

export type CartReducer = {
  (
    state: CartState | undefined,
    action: Actions["toggleCartHidden"]
  ): CartState;
  (state: CartState | undefined, action: Actions["addCartItem"]): CartState;
  (state: CartState | undefined, action: Actions["deleteCartItem"]): CartState;
  (state: CartState | undefined, action: Actions["removeCartItem"]): CartState;
};

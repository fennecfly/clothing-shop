import { Item } from "../../shopData/shopDataInterfaces";
import { MyReducerAction } from "../reducerInterfaces";
import { CartActionTypes } from "./cartActionTypes";

export interface CartItem extends Item {
  count: number;
}

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

export type CartReducer = {
  (
    state: CartState | undefined,
    action: MyReducerAction<CartActionTypes.ToggleCartHidden, undefined>
  ): CartState;
  (
    state: CartState | undefined,
    action: MyReducerAction<CartActionTypes.SetCartHidden, boolean>
  ): CartState;
  (
    state: CartState | undefined,
    action: MyReducerAction<CartActionTypes.AddCartItem, Item>
  ): CartState;
  (
    state: CartState | undefined,
    action: MyReducerAction<CartActionTypes.RemoveCartItem, number>
  ): CartState;
};

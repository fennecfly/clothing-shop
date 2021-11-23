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
    action: MyReducerAction<CartActionTypes.AddCartItem, Item>
  ): CartState;
  (
    state: CartState | undefined,
    action: MyReducerAction<CartActionTypes.DeleteCartItem, number>
  ): CartState;
  (
    state: CartState | undefined,
    action: MyReducerAction<CartActionTypes.RemoveCartItem, number>
  ): CartState;
};

export type DeleteCartItem = (id: number) => void;
export type RemoveCartItem = (id: number) => void;
export type AddCartItem = (item: CartItem | Item) => void;
export type ToggleCartHidden = () => void;

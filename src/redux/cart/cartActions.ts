import { Item } from "../../shopData/shopDataInterfaces";
import {
  MyActionCreator,
  MyActionCreatorWithoutParams,
} from "../reducerInterfaces";
import { CartActionTypes } from "./cartActionTypes";

export const toggleCartHiddenAction: MyActionCreatorWithoutParams<CartActionTypes.ToggleCartHidden> =
  () => ({
    type: CartActionTypes.ToggleCartHidden,
    payload: undefined,
  });

export const addCartItemAction: MyActionCreator<
  CartActionTypes.AddCartItem,
  Item
> = (item) => ({
  type: CartActionTypes.AddCartItem,
  payload: item,
});

export const removeCartItemAction: MyActionCreator<
  CartActionTypes.RemoveCartItem,
  number
> = (id) => ({
  type: CartActionTypes.RemoveCartItem,
  payload: id,
});

export const deleteCartItemAction: MyActionCreator<
  CartActionTypes.DeleteCartItem,
  number
> = (id) => ({
  type: CartActionTypes.DeleteCartItem,
  payload: id,
});

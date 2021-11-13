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

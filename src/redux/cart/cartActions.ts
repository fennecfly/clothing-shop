import { MyReducerAction } from "../reducerInterfaces";
import { CartActionTypes } from "./cartActionTypes";

export const toggleCartHiddenAction = (): MyReducerAction<
  CartActionTypes.ToggleCartHidden,
  undefined
> => ({
  type: CartActionTypes.ToggleCartHidden,
  payload: undefined,
});

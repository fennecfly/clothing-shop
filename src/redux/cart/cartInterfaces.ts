import { MyReducerAction } from "../reducerInterfaces";
import { CartActionTypes } from "./cartActionTypes";

export interface CartState {
  hidden: boolean;
}

export type CartReducer = (
  state: CartState | undefined,
  action: MyReducerAction<CartActionTypes.ToggleCartHidden, undefined>
) => CartState;

import { Dispatch } from "react";
import { MapStateToProps } from "react-redux";
import { EmptyObject } from "redux";
import { Item } from "../shopData/shopDataInterfaces";
import { CartActionTypes } from "./cart/cartActionTypes";
import { MyReducerAction } from "./reducerInterfaces";
import store from "./store";
import { UserActionTypes } from "./user/userActionTypes";
import { CurrentUser } from "./user/userInterfaces";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = Dispatch<
  | MyReducerAction<UserActionTypes.SetCurrentUser, CurrentUser>
  | MyReducerAction<CartActionTypes.AddCartItem, Item>
  | MyReducerAction<CartActionTypes.ToggleCartHidden, undefined>
  | MyReducerAction<CartActionTypes.RemoveCartItem, number>
  | MyReducerAction<CartActionTypes.DeleteCartItem, number>
>;

export type MyMapStateToProps<StateProps> = MapStateToProps<
  StateProps,
  EmptyObject,
  RootState
>;

export type MyMapDispatchToProps<DispatchProps> = (
  dispatch: AppDispatch
) => DispatchProps;

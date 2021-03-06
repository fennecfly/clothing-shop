import { Dispatch } from "react";
import { MapStateToProps } from "react-redux";
import { EmptyObject } from "redux";
import { CartActionTypes } from "./cart/cartActionTypes";
import { CartItem } from "./cart/cartInterfaces";
import { CollectionItem } from "./shopReducer/shopInterfaces";
import store from "./store";
import { UserActionTypes } from "./user/userActionTypes";
import { CurrentUser } from "./user/userInterfaces";

interface MyReducerAction<Type, Payload> {
  type: Type;
  payload: Payload;
}

export interface MyActionCreator<Type, Payload> {
  (payload: Payload): MyReducerAction<Type, Payload>;
}

export interface MyActionCreatorWithoutParams<Type> {
  (): MyReducerAction<Type, undefined>;
}

export interface Actions {
  deleteCartItem: MyReducerAction<CartActionTypes.DeleteCartItem, number>;
  addCartItem: MyReducerAction<CartActionTypes.AddCartItem, CollectionItem>;
  removeCartItem: MyReducerAction<CartActionTypes.RemoveCartItem, number>;
  toggleCartHidden: MyReducerAction<
    CartActionTypes.ToggleCartHidden,
    undefined
  >;
  setCurrentUser: MyReducerAction<UserActionTypes.SetCurrentUser, CurrentUser>;
  undefined: MyReducerAction<"", undefined>;
}

export interface ReducerFunctions {
  deleteCartItem: (id: number) => void;
  addCartItem: (item: CartItem | CollectionItem) => void;
  removeCartItem: (id: number) => void;
  toggleCartHidden: () => void;
  setCurrentUser: (user: CurrentUser) => void;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = Dispatch<
  | Actions["setCurrentUser"]
  | Actions["addCartItem"]
  | Actions["toggleCartHidden"]
  | Actions["removeCartItem"]
  | Actions["deleteCartItem"]
>;

export type MyMapStateToProps<StateProps> = MapStateToProps<
  StateProps,
  EmptyObject,
  RootState
>;

export type MyMapDispatchToProps<DispatchProps> = (
  dispatch: AppDispatch
) => DispatchProps;

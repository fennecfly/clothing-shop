import { CartItem } from "./redux/cart/cartInterfaces";
import { ReducerFunctions } from "./redux/reducerInterfaces";
import { CurrentUser } from "./redux/user/userInterfaces";

export type AppDispatchProps = Pick<ReducerFunctions, "setCurrentUser">;

export interface AppStateProps {
  currentUser: CurrentUser;
  cartItems: CartItem[];
}

export interface AppProps extends AppDispatchProps, AppStateProps {}

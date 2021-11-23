import { CartItem } from "./redux/cart/cartInterfaces";
import { CurrentUser, SetCurrentUser } from "./redux/user/userInterfaces";

export interface AppDispatchProps {
  setCurrentUser: SetCurrentUser;
}

export interface AppStateProps {
  currentUser: CurrentUser;
  cartItems: CartItem[];
}

export interface AppProps extends AppDispatchProps, AppStateProps {}

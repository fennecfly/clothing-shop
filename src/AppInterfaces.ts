import { CartItem } from "./redux/cart/cartInterfaces";
import { CurrentUser } from "./redux/user/userInterfaces";

export interface AppDispatchProps {
  setCurrentUser: (user: CurrentUser) => void;
}

export interface AppStateProps {
  currentUser: CurrentUser;
  cartItems: CartItem[];
}

export interface AppProps extends AppDispatchProps, AppStateProps {}

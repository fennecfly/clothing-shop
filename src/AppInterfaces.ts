import { CartItem } from "./redux/cart/cartInterfaces";
import { CurrentUser } from "./redux/user/userInterfaces";

export interface AppProps {
  setCurrentUser: (user: CurrentUser) => void;
  currentUser: CurrentUser;
  cartItems: CartItem[];
}

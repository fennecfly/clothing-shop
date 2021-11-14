import { RouteComponentProps } from "react-router";
import { CartItem } from "../../redux/cart/cartInterfaces";

export interface CartDropdownProps extends RouteComponentProps {
  cartItems: CartItem[];
}

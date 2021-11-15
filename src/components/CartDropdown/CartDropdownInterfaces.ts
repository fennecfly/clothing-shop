import { RouteComponentProps } from "react-router";
import { CartItem } from "../../redux/cart/cartInterfaces";

export interface CartDropdownStateProps {
  cartItems: CartItem[];
}

export interface CartDropdownDispatchProps {
  toggleCartHidden: () => void;
}

export interface CartDropdownProps
  extends RouteComponentProps,
    CartDropdownDispatchProps,
    CartDropdownStateProps {}

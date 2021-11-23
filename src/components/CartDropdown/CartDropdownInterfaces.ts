import { RouteComponentProps } from "react-router";
import { CartItem, ToggleCartHidden } from "../../redux/cart/cartInterfaces";

export interface CartDropdownStateProps {
  cartItems: CartItem[];
}

export interface CartDropdownDispatchProps {
  toggleCartHidden: ToggleCartHidden;
}

export interface CartDropdownProps
  extends RouteComponentProps,
    CartDropdownDispatchProps,
    CartDropdownStateProps {}

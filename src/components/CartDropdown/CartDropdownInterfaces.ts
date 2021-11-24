import { RouteComponentProps } from "react-router";
import { CartItem } from "../../redux/cart/cartInterfaces";
import { ReducerFunctions } from "../../redux/reducerInterfaces";

export interface CartDropdownStateProps {
  cartItems: CartItem[];
}

export type CartDropdownDispatchProps = Pick<
  ReducerFunctions,
  "toggleCartHidden"
>;

export interface CartDropdownProps
  extends RouteComponentProps,
    CartDropdownDispatchProps,
    CartDropdownStateProps {}

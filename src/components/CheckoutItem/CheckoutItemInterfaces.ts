import { CartItem } from "../../redux/cart/cartInterfaces";
import { ReducerFunctions } from "../../redux/reducerInterfaces";

export type CheckoutItemDispatchProps = Pick<
  ReducerFunctions,
  "deleteCartItem" | "addCartItem" | "removeCartItem"
>;

export interface CheckoutItemProps extends CheckoutItemDispatchProps {
  cartItem: CartItem;
}

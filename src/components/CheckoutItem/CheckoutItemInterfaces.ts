import { CartItem } from "../../redux/cart/cartInterfaces";

export interface CheckoutItemDispatchProps {
  removeCartItem: (id: number) => void;
}

export interface CheckoutItemProps extends CheckoutItemDispatchProps {
  cartItem: CartItem;
}

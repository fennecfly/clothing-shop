import {
  AddCartItem,
  CartItem,
  DeleteCartItem,
  RemoveCartItem,
} from "../../redux/cart/cartInterfaces";

export interface CheckoutItemDispatchProps {
  deleteCartItem: DeleteCartItem;
  removeCartItem: RemoveCartItem;
  addCartItem: AddCartItem;
}

export interface CheckoutItemProps extends CheckoutItemDispatchProps {
  cartItem: CartItem;
}

import { CartItem } from "../../redux/cart/cartInterfaces";

export interface CheckoutPageProps {
  cartItems: CartItem[];
  total: number;
}

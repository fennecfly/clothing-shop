import { CartItem } from "../../redux/cart/cartInterfaces";

export interface CartIconProps {
  toggleCartHidden: () => void;
  cartItems: CartItem[];
}

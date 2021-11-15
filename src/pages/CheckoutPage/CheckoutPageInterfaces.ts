import { CartItem } from "../../redux/cart/cartInterfaces";

export interface CheoutPageStateProps {
  cartItems: CartItem[];
  total: number;
}

export type CheckoutPageProps = CheoutPageStateProps;

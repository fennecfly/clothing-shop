import { ToggleCartHidden } from "../../redux/cart/cartInterfaces";

export interface CartIconDispatchProps {
  toggleCartHidden: ToggleCartHidden;
}

export interface CartIconProps extends CartIconDispatchProps {
  itemCount: number;
}

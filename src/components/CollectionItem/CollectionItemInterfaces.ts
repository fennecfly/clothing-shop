import { AddCartItem } from "../../redux/cart/cartInterfaces";
import { Item } from "../../shopData/shopDataInterfaces";

export interface CollectionItemDispatchProps {
  addCartItem: AddCartItem;
}

export interface CollectionItemProps extends CollectionItemDispatchProps {
  item: Item;
}

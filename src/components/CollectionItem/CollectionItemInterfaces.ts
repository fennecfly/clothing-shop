import { Item } from "../../shopData/shopDataInterfaces";

export interface CollectionItemDispatchProps {
  addCartItem: (item: Item) => void;
}

export interface CollectionItemProps extends CollectionItemDispatchProps {
  item: Item;
}

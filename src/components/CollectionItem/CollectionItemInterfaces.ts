import { Item } from "../../shopData/shopDataInterfaces";

export interface CollectionItemProps {
  item: Item;
  addCartItem: (item: Item) => void;
}

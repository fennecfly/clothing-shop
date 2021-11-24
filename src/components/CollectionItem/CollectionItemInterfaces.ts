import { ReducerFunctions } from "../../redux/reducerInterfaces";
import { Item } from "../../shopData/shopDataInterfaces";

export type CollectionItemDispatchProps = Pick<ReducerFunctions, "addCartItem">;

export interface CollectionItemProps extends CollectionItemDispatchProps {
  item: Item;
}

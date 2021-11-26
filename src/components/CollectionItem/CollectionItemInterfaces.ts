import { ReducerFunctions } from "../../redux/reducerInterfaces";
import { CollectionItem } from "../../redux/shopReducer/shopInterfaces";

export type CollectionItemDispatchProps = Pick<ReducerFunctions, "addCartItem">;

export interface CollectionItemProps extends CollectionItemDispatchProps {
  item: CollectionItem;
}

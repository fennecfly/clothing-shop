import { Actions } from "../reducerInterfaces";

export interface CollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}

export interface ShopState {
  collections: Collection[];
}

export type ShopReducer = (
  state: ShopState | undefined,
  action: Actions["undefined"]
) => ShopState;

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

export interface CollectionData {
  [key: string]: Collection;
}

export interface ShopState {
  collections: CollectionData;
}

export type ShopReducer = (
  state: ShopState | undefined,
  action: Actions["undefined"]
) => ShopState;

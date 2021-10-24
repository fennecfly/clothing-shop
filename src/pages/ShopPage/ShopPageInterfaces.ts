export interface ShopPageState {
  shopData: CollectionData[];
}

export interface CollectionItemData {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CollectionData {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItemData[];
}

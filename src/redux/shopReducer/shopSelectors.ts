import { createSelector } from "reselect";
import { RootState } from "../reducerInterfaces";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

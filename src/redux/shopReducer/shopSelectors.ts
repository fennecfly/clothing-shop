import { createSelector } from "reselect";
import { RootState } from "../reducerInterfaces";

const collectionIdMap = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectCollections],
    (collections) =>
      collections[Object.keys(collectionIdMap).indexOf(collectionUrlParam)]
  );

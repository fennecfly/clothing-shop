import { createSelector } from "reselect";
import { RootState } from "../reducerInterfaces";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

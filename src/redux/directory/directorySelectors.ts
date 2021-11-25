import { createSelector } from "reselect";
import { RootState } from "../reducerInterfaces";

const selectDirectory = (state: RootState) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

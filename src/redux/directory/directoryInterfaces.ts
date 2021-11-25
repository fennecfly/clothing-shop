import { Actions } from "../reducerInterfaces";

export interface DirectorySection {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "large";
}

export interface DirectoryState {
  sections: DirectorySection[];
}

export type DirectoryReducer = (
  state: DirectoryState | undefined,
  action: Actions["undefined"]
) => DirectoryState;

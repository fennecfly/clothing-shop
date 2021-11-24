import { Actions } from "../reducerInterfaces";
export interface User {
  id: string;
  creationDate: string;
  displayName: string;
  email: string;
}

export type CurrentUser = User | null;

export interface CurrentUserState {
  currentUser: CurrentUser;
}

export type UserReducer = (
  state: CurrentUserState | undefined,
  action: Actions["setCurrentUser"]
) => CurrentUserState;

import { MyReducerAction } from "../reducerInterfaces";
import { UserActionTypes } from "./userActionTypes";
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
  action: MyReducerAction<UserActionTypes.SetCurrentUser, CurrentUser>
) => CurrentUserState;

export type SetCurrentUser = (user: CurrentUser) => void;

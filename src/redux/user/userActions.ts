import { MyActionCreator } from "../reducerInterfaces";
import { UserActionTypes } from "./userActionTypes";
import { CurrentUser } from "./userInterfaces";

export const setCurrentUserAction: MyActionCreator<
  UserActionTypes.SetCurrentUser,
  CurrentUser
> = (user) => ({
  type: UserActionTypes.SetCurrentUser,
  payload: user,
});

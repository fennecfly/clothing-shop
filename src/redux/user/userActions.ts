import { MyReducerAction } from "../reducerInterfaces";
import { UserActionTypes } from "./userActionTypes";
import { CurrentUser } from "./userInterfaces";

export const getSetCurrentUserAction = (
  user: CurrentUser
): MyReducerAction<UserActionTypes.SetCurrentUser, CurrentUser> => ({
  type: UserActionTypes.SetCurrentUser,
  payload: user,
});

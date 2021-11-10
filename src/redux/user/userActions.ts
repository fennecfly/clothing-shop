import { MyReducerAction } from "../reducerInterfaces";
import { UserActionTypes } from "./userActionTypes";
import { CurrentUser } from "./userInterfaces";

export const getSetCurrentUserAction = (
  user: CurrentUser
): MyReducerAction<CurrentUser> => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

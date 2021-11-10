import { MyReducerAction } from "../reducerInterfaces";
import { CurrentUser } from "./userInterfaces";

export const getSetCurrentUserAction = (
  user: CurrentUser
): MyReducerAction<CurrentUser> => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

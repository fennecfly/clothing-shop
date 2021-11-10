import { MyReducerAction } from "../reducerInterfaces";
import { User } from "./userInterfaces";

export const getSetCurrentUserAction = (user: User): MyReducerAction<User> => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

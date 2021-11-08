import { ReducerAction } from "../reducerInterfaces";
import { User } from "./userInterfaces";

export const setCurrentUser = (user: User): ReducerAction<User> => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

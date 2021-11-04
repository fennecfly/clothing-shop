import { ReducerAction } from "../reducerInterfaces";
import { User, UserState } from "./userInterfaces";

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userReducer = (
  state: UserState = INITIAL_STATE,
  action: ReducerAction<User>
): UserState => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

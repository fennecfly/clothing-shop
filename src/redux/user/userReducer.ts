import { MyReducerAction } from "../reducerInterfaces";
import { CurrentUser, CurrentUserState } from "./userInterfaces";

const INITIAL_STATE: CurrentUserState = {
  currentUser: null,
};

const userReducer = (
  state: CurrentUserState = INITIAL_STATE,
  action: MyReducerAction<CurrentUser>
): CurrentUserState => {
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
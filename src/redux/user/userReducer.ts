import { UserActionTypes } from "./userActionTypes";
import { CurrentUserState, UserReducer } from "./userInterfaces";

const initialState: CurrentUserState = {
  currentUser: null,
};

const userReducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SetCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

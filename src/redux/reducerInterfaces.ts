export interface ReducerAction<Type> {
  type: "SET_CURRENT_USER";
  payload: Type;
}

export interface MyReducerAction<Type> {
  type: "SET_CURRENT_USER";
  payload: Type;
}

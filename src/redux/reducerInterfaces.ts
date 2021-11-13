export interface MyReducerAction<Type, Payload> {
  type: Type;
  payload: Payload;
}

export interface MyActionCreator<Type, Payload> {
  (payload: Payload): MyReducerAction<Type, Payload>;
}

export interface MyActionCreatorWithoutParams<Type> {
  (): MyReducerAction<Type, undefined>;
}

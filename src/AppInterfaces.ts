import { EmptyObject } from "./helpers/EmptyObject";

export interface AppState {
  currentUser: null | firebase.default.User;
}

export type AppProps = EmptyObject;

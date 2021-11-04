import { User } from "./redux/user/userInterfaces";

export interface AppState {
  currentUser: User | null;
}

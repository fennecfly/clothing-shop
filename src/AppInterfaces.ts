import { CurrentUser } from "./redux/user/userInterfaces";

export interface AppProps {
  setCurrentUser: (user: CurrentUser) => void;
}

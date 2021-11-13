import { CurrentUser } from "../../redux/user/userInterfaces";

export interface HeaderProps {
  currentUser: CurrentUser;
  cartHidden: boolean;
}

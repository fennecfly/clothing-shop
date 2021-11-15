import { CurrentUser } from "../../redux/user/userInterfaces";

export interface HeaderStateProps {
  currentUser: CurrentUser;
  cartHidden: boolean;
}

export type HeaderProps = HeaderStateProps;

export interface User {
  id: string;
  creationDate: string;
  displayName: string;
  email: string;
}

export interface CurrentUserState {
  currentUser: User | null;
}

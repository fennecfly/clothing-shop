export interface User {
  id: string;
  creationDate: string;
  displayName: string;
  email: string;
}

export interface UserState {
  currentUser: User | null;
}

export interface User {
  id: string;
  creationDate: string;
  displayName: string;
  email: string;
}

export interface AppState {
  currentUser: User | null;
}

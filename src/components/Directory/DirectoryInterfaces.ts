export interface Section {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "large";
}

export interface DirectoryState {
  sections: Section[];
}

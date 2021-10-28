import React from "react";
import MenuItem from "../MenuItem/MenuItemComponent";
import { DirectoryProps, DirectoryState } from "./DirectoryInterfaces";
import "./DirectoryStyles.scss";
import { sections } from "./sections";

class Directory extends React.Component<DirectoryProps, DirectoryState> {
  constructor(props: DirectoryProps) {
    super(props);

    this.state = { sections };
  }

  render(): JSX.Element {
    return (
      <div className="directoryMenu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

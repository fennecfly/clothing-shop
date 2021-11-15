import React from "react";
import { EmptyObject } from "../../helpers/EmptyObject";
import MenuItem from "../MenuItem/MenuItemComponent";
import { DirectoryState } from "./DirectoryInterfaces";
import "./DirectoryStyles.scss";
import { sections } from "./sections";

class Directory extends React.Component<EmptyObject, DirectoryState> {
  constructor(props: EmptyObject) {
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

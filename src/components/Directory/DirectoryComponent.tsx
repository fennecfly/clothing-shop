import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directorySelectors";
import { MyMapStateToProps } from "../../redux/reducerInterfaces";
import MenuItem from "../MenuItem/MenuItemComponent";
import { DirectoryProps } from "./DirectoryInterfaces";
import "./DirectoryStyles.scss";

const Directory = ({ sections }: DirectoryProps): JSX.Element => (
  <div className="directoryMenu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps: MyMapStateToProps<DirectoryProps> =
  createStructuredSelector({
    sections: selectSections,
  });

export default connect(mapStateToProps)(Directory);

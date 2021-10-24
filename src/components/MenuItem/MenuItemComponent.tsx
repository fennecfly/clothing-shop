import React from "react";
import { withRouter } from "react-router";
import { MenuItemProps } from "./MenuItemInterfaces";
import "./MenuItemStyles.scss";

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  match,
  linkUrl,
}: MenuItemProps): JSX.Element => (
  <div
    className={`${size} menuItem`}
    onClick={() => history.push(match.url + linkUrl)}
  >
    <div
      className={`backgroundImage`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>

      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

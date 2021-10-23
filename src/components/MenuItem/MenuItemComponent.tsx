import React from "react";
import { MenuItemProps } from "./MenuItemInterfaces";
import "./MenuItemStyles.scss";

export const MenuItem = ({
  title,
  imageUrl,
  size,
}: MenuItemProps): JSX.Element => (
  <div className={`${size} menuItem`}>
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

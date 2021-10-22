import React from "react";
import { MenuItemProps } from "./MenuItemInterfaces";
import "./MenuItemStyles.scss";

export const MenuItem = ({ title, imageUrl }: MenuItemProps): JSX.Element => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className="menu-item"
  >
    <div className="content">
      <h1 className="title">{title}</h1>

      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

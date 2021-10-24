import React from "react";
import CollectionItem from "../CollectionItem/CollectionItemComponent";
import { CollectionPreviewProps } from "./CollectionPreviewInterfaces";
import "./CollectionPreviewStyles.scss";

const CollectionPreview = ({
  title,
  items,
}: CollectionPreviewProps): JSX.Element => (
  <div className="collectionPreview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items.slice(0, 4).map(({ id, ...otherProps }) => (
        <CollectionItem key={id} {...otherProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;

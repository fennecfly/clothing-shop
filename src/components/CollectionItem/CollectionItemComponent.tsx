import React from "react";
import CustomButton from "../CustomButton/CustomButtonComponent";
import { CollectionItemProps } from "./CollectionItemInterfaces";
import "./CollectionItemStyles.scss";

const CollectionItem = ({
  name,
  price,
  imageUrl,
}: CollectionItemProps): JSX.Element => (
  <div className="collectionItem">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="collectionFooter">
      <span className="name">{name}</span>

      <span className="price">${price}</span>
    </div>

    <CustomButton inverted={true}>Add to cart</CustomButton>
  </div>
);

export default CollectionItem;

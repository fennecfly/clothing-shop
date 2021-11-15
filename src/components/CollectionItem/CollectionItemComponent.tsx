import React from "react";
import { connect } from "react-redux";
import { addCartItemAction } from "../../redux/cart/cartActions";
import { MyMapDispatchToProps } from "../../redux/storeInterfaces";
import { Item } from "../../shopData/shopDataInterfaces";
import CustomButton from "../CustomButton/CustomButtonComponent";
import {
  CollectionItemDispatchProps,
  CollectionItemProps,
} from "./CollectionItemInterfaces";
import "./CollectionItemStyles.scss";

const CollectionItem = ({
  item,
  addCartItem,
}: CollectionItemProps): JSX.Element => {
  const { name, price, imageUrl } = item;

  return (
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

      <CustomButton inverted={true} onClick={() => addCartItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps: MyMapDispatchToProps<CollectionItemDispatchProps> = (
  dispatch
) => ({
  addCartItem: (item: Item) => dispatch(addCartItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

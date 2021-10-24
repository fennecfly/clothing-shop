import React from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreviewComponent";
import { EmptyObject } from "../../helpers/EmptyObject";
import { shopData } from "./shopData";
import { ShopPageState } from "./ShopPageInterfaces";

class ShopPage extends React.Component<EmptyObject, ShopPageState> {
  constructor() {
    super({});

    this.state = {
      shopData,
    };
  }

  render(): JSX.Element {
    return (
      <div className="shopPage">
        {this.state.shopData.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

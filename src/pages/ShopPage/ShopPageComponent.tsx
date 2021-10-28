import React from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreviewComponent";
import { shopData } from "./shopData";
import { ShopPageProps, ShopPageState } from "./ShopPageInterfaces";

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);

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
